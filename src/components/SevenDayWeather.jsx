import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";

export default function SevenDayWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [wind, setWind] = useState(null);
  const [currentTemp, setCurrentTemp] = useState(null);
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
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7d64ef67c50f7ef01de29cb2a7373069&lang=es&units=metric`
      )
      .then((response) => {
        const currentTemp = response.data.main.temp;
        setCurrentTemp(currentTemp);
        console.log(currentTemp);
      });
  }, []);

  console.log(weatherData);
  return (
    <>
      <div className="flex flex-col w-screen">
        <Header city={city} />
        <div className="flex flex-row mt-20 ml-10 ">
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
                daily={day.pop}
                actualTemp={currentTemp}
              >
                {/* Muestra los datos del día aquí */}
                <p>{day.temp && day.temp.day}</p>
                <p>
                  {day.weather && day.weather[0] && day.weather[0].description}
                </p>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}
