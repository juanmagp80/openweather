import { useEffect, useState, useRef } from "react";
import axios from "axios";

const HourWeather = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [temperature, setTemperature] = useState(null);
  const [current, setCurrent] = useState({});
  const [astro, setAstro] = useState({});
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const weatherIcons = {
    Soleado: "sunny.svg",
    Nublado: "cielocubierto.svg",
    Cielo_cubierto: "cielocubierto.svg",
    Lluvia_moderada_a_intervalos: "lluviaintervalos.svg",
    Parcialmente_nublado: "lluviaintervalos.svg",
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
        if (coordinates) {
          const weatherResponse = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=b43553c1aac3488cae6193412242901&q=${coordinates.latitude},${coordinates.longitude}&days=14&lang=es`
          );

          console.log(weatherResponse.data);
          setTemperature(weatherResponse.data.current.temp_c);
          setForecast(weatherResponse.data.forecast.forecastday);
          setCurrent(weatherResponse.data.current);
          setHourlyForecast(weatherResponse.data.forecast.forecastday[0].hour);
        }
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };

    getWeather();
  }, [coordinates]);

  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    scrollContainer.current.scrollLeft += 200;
  };

  return (
    <div className="w-3/4 mx-auto my-0 flex">
      <button
        onClick={scrollLeft}
        className="p-2 m-2 bg-blue-500 text-white self-center"
      >
        ←
      </button>

      <div
        ref={scrollContainer}
        className="flex flex-nowrap  bg-white overflow-x-auto space-x-4"
      >
        {forecast.length > 0 &&
          forecast.map((day, index) => {
            let iconPath;
            if (day && day.day && day.day.condition) {
              iconPath = `/icons/${
                weatherIcons[
                  day.day.condition.text
                    .replace(/\s+/g, " ")
                    .trim()
                    .replace(/ /g, "_")
                ]
              }`;
            }
            const dayOfWeek = new Date(day.date).toLocaleDateString("es-ES", {
              weekday: "long",
            });

            return (
              <div key={index} className=" p-4">
                <div className="border p-4 rounded-xl">
                  <img
                    width={100}
                    height={100}
                    src={iconPath}
                    alt={
                      day &&
                      day.day &&
                      day.day.condition &&
                      day.day.condition.text
                    }
                  />
                  <h2 className="text-center">{dayOfWeek}</h2>
                  <h2 className="text-center">{day.day.maxtemp_c}Cº</h2>
                  <h2 className="text-center">{day.day.mintemp_c}Cº</h2>
                  <h1 className=" text-sm text-center font-poppins">
                    {day.day.condition.text}{" "}
                  </h1>
                </div>
              </div>
            );
          })}
      </div>
      <button
        onClick={scrollRight}
        className="p-2 m-2 bg-blue-500 text-white self-center"
      >
        →
      </button>
    </div>
  );
};

export default HourWeather;
