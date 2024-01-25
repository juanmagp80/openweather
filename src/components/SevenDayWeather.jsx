import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function SevenDayWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [wind, setWind] = useState(null);
  useEffect(() => {
    axios.get("URL_DE_TU_API").then((response) => {
      setMaxTemp(response.data.main.temp_max);
      setMinTemp(response.data.main.temp_min);
    });
  }, []);
  useEffect(() => {
    axios
      .get("http://ip-api.com/json")
      .then((response) => {
        const { lat, lon, city } = response.data;
        setCity(city); // Ahora puedes usar `lat` y `lon` en tu solicitud a la API de OpenWeatherMap

        return axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=7d64ef67c50f7ef01de29cb2a7373069&lang=es&units=metric`
        );
      })
      .then((response) => {
        setWeatherData(response.data);
        // Maneja la respuesta de la API de OpenWeatherMap aquí
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(weatherData);
  return (
    <>
      <div className="p-4 bg-gray-200 w-full font-poppins flex justify-center text-center text-2xl font-bold ">
        <h1>El tiempo en {city} en los próximos 7 días</h1>
      </div>
      <div className="flex flex-row mt-20 ">
        {weatherData &&
          weatherData.daily && // Si `weatherData` y `weatherData.daily` existen, entonces renderiza el siguiente código
          weatherData.daily.map((day, index) => (
            <Card
              temp={Math.round(day.temp.day)} // Redondea la temperatura a un número entero
              description={day.weather[0].description}
              key={index}
              dt={day.dt}
              maxTemp={Math.round(day.temp.max)}
              minTemp={Math.round(day.temp.min)}
              wind={day.wind_speed}
            >
              {/* Muestra los datos del día aquí */}
              <p>{day.temp && day.temp.day}</p>
              <p>
                {day.weather && day.weather[0] && day.weather[0].description}
              </p>
            </Card>
          ))}
      </div>
    </>
  );
}
