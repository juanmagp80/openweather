import { useState, useEffect } from "react";
import axios from "axios";

function ActualDay() {
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState({});
  const [weatherData, setWeatherData] = useState({}); // [1
  const [temperature, setTemperature] = useState(null);
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const weatherIcons = {
    Soleado: "sun.svg",
    Nublado: "cloud.svg",
    Cielo_cubierto: "cielocubierto.svg",
    // Añade más estados del tiempo y nombres de archivos SVG aquí
  };

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setCoordinates({
          latitude: response.data.latitude,
          longitude: response.data.longitude,
        });
        setLocation(response.data.city);
      } catch (error) {
        console.error("Error fetching location data: ", error);
      }
    };

    getCoordinates();
  }, []);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const weatherResponse = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=b43553c1aac3488cae6193412242901&q=${coordinates.latitude},${coordinates.longitude}&days=1&lang=es`
        );
        console.log(weatherResponse.data);
        setTemperature(weatherResponse.data.current.temp_c);
        setForecast(weatherResponse.data.forecast.forecastday[0]);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };

    if (coordinates.latitude && coordinates.longitude) {
      getWeather();
    }
  }, [coordinates]);

  return (
    <div
      className="flex items-center justify-center p-4 w-screen min-h-screen mx-auto"
      style={{ maxWidth: "1024px" }}
    >
      <div className="p-4 mx-auto" style={{ maxWidth: "1024px" }}>
        <div className="flex flex-col p-4 w-1/2 bg-white rounded-xl shadow-xl border-black border-2 ml-96">
          {forecast && forecast.day && (
            <>
              <div className="flex justify-between items-center">
                <div className="flex mb-10 flex-col justify-start">
                  <h1 className="text-4xl uppercase font-poppins">
                    {" "}
                    {new Date(forecast.date).toLocaleDateString("es-ES", {
                      weekday: "long",
                    })}{" "}
                  </h1>
                  <div className="flex">
                    <h1 className="text-xl font-poppins"> {location} </h1>
                  </div>
                  <div className="flex">
                    <h1 className="text-2xl font-poppins">
                      {forecast.day.condition.text}{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <img
                    width={200}
                    height={200}
                    src={`../../public/icons/${
                      weatherIcons[
                        forecast.day.condition.text.replace(/ /g, "_")
                      ]
                    }`}
                    alt={forecast.day.condition.text}
                  />
                </div>
              </div>

              <h1>Viento: {forecast.day.wind_kph} kph </h1>
              <h1>Humedad: {forecast.day.humidity}% </h1>
              <h1>Sensación térmica: {forecast.day.feelslike_c}°C </h1>
              <h1>Temperatura actual: {forecast.day.temp_c}°C </h1>
              <h1>
                Temperatura máxima: {forecast.day.maxtemp_c}
                °C{" "}
              </h1>
              <h1>
                Temperatura mínima: {forecast.day.mintemp_c}
                °C{" "}
              </h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default ActualDay;
