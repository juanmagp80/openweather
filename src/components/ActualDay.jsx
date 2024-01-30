import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function ActualDay() {
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState({});
  const [weatherData, setWeatherData] = useState({}); // [1
  const [temperature, setTemperature] = useState(null);
  const [current, setCurrent] = useState({}); // [1
  const [astro, setAstro] = useState({}); // [1
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const weatherIcons = {
    Soleado: "sunny.svg",
    Nublado: "cloud.svg",
    Cielo_cubierto: "cielocubierto.svg",
    Lluvia_moderada_a_intervalos: "lluviaintervalos.svg",
    Parcialmente_nublado: "lluviaintervalos.svg",

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
        setCurrent(weatherResponse.data.current);
        setAstro(weatherResponse.data.forecast.forecastday[0].astro);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };

    if (coordinates.latitude && coordinates.longitude) {
      getWeather();
    }
  }, [coordinates]);
  let iconPath;
  if (forecast && forecast.day && forecast.day.condition) {
    iconPath = `/icons/${
      weatherIcons[
        forecast.day.condition.text
          .replace(/\s+/g, " ")
          .trim()
          .replace(/ /g, "_")
      ]
    }
  `;
  }
  console.log(iconPath);
  console.log(iconPath);
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex w-full justify-center">
        <div className="shadow-3d flex flex-col p-4 w-1/2 bg-white rounded-xl  border-gray-300 border-2">
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
                  <div className="flex flex-row">
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
                    src={iconPath}
                    alt={
                      forecast &&
                      forecast.day &&
                      forecast.day.condition &&
                      forecast.day.condition.text
                    }
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col ">
                  <div className="flex gap-3">
                    <img
                      src="../../public/icons/windsock.svg"
                      alt="windsock"
                      className="self-center h-12 w-12"
                    />
                    <p className="mt-4">
                      Viento: {forecast.day.maxwind_kph} kph (
                      {forecast.day.maxwind_mph} mph)
                    </p>
                  </div>
                  <div className="flex gap-3 ">
                    <img
                      src="../../public/icons/humidity.svg"
                      alt="humidity"
                      className="self-center h-12 w-12"
                    />
                    <p className="mt-4">Humedad: {forecast.day.avghumidity}%</p>
                  </div>
                  <div className="flex gap-3">
                    <img
                      src="../../public/icons/thermometer.svg"
                      alt="thermometer"
                      className="h-12 w-12 self-center"
                    />

                    <p className="mt-4">
                      Temperatura actual:{" "}
                      {current.temp_c ? `${current.temp_c}°C` : "No disponible"}{" "}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img
                      src="../../public/icons/thermometer-warmer.svg"
                      alt="thermometer"
                      className="h-12 w-12 self-center"
                    />

                    <p className="mt-4">
                      Temperatura máxima:{" "}
                      {forecast.day.maxtemp_c
                        ? `${forecast.day.maxtemp_c}°C`
                        : "No disponible"}{" "}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img
                      src="../../public/icons/thermometer-colder.svg"
                      alt="thermometer"
                      className="h-12 w-12 self-center"
                    />

                    <p className="mt-4">
                      Temperatura mínima:{" "}
                      {forecast.day.mintemp_c
                        ? `${forecast.day.mintemp_c}°C`
                        : "No disponible"}{" "}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="flex mr-8">
                    <div className="flex mr-12">
                      <img
                        src="../../public/icons/thermometer.svg"
                        alt="thermometer"
                        className="h-32 w-32 "
                      />
                      <h1 className="mt-4 text-7xl font-bold">
                        {current.temp_c
                          ? `${current.temp_c}°C`
                          : "No disponible"}{" "}
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex ml-12">
                      <img
                        src="../../public/icons/sunrise.svg"
                        alt="thermometer"
                        className="h-12 w-12 self-center"
                      />
                      <p className="mt-4">
                        Amanecer:{" "}
                        {astro.sunrise ? `${astro.sunrise}` : "No disponible"}{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex ml-12">
                      <img
                        src="../../public/icons/sunset.svg"
                        alt="thermometer"
                        className="h-12 w-12 self-center"
                      />
                      <p className="mt-4">
                        Puesta de sol:{" "}
                        {astro.sunset ? `${astro.sunset}` : "No disponible"}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default ActualDay;