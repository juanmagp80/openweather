import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const HourWeather = ({ searchedCity }) => {
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
    Lluvia_moderada: "rainy-6.svg",
    Niebla_moderada: "fog.svg",
    Nieve_moderada: "snowy-4.svg",
    Fuertes_nevadas: "snowy-6.svg",
    Fuertes_lluvias: "rainy-7.svg",
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
        let locationQuery;
        if (searchedCity) {
          locationQuery = searchedCity;
        } else if (coordinates) {
          locationQuery = `${coordinates.latitude},${coordinates.longitude}`;
        } else {
          return;
        }

        const weatherResponse = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=b43553c1aac3488cae6193412242901&q=${locationQuery}&days=14&lang=es`
        );

        console.log(weatherResponse.data);
        setTemperature(weatherResponse.data.current.temp_c);
        setForecast(weatherResponse.data.forecast.forecastday);
        setCurrent(weatherResponse.data.current);
        setHourlyForecast(weatherResponse.data.forecast.forecastday[0].hour);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };

    getWeather();
  }, [searchedCity, coordinates]);

  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    scrollContainer.current.scrollLeft += 200;
  };

  return (
    <div className="w-full flex items-center justify-center mx-auto my-0 ">
      <div className=" flex w-3/4 justify-center rounded overflow-x-hidden  items-center">
        <button onClick={scrollLeft}>
          {" "}
          <FaArrowCircleLeft className="h-12 w-12" />
        </button>
        <div
          ref={scrollContainer}
          className="flex opacity-80 hide-scrollbar overflow-x-auto"
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
                <div key={index} className="w-full p-4">
                  <div className="w-32 h-64 bg-gray-200  shadow-xl border p-4 rounded-xl">
                    <img
                      className="object-cover "
                      width={86}
                      height={86}
                      src={iconPath}
                      alt={
                        day &&
                        day.day &&
                        day.day.condition &&
                        day.day.condition.text
                      }
                    />
                    <h2 className="text-center uppercase font-rubik">
                      {dayOfWeek}
                    </h2>
                    <h2 className="text-center font-rubik">
                      {day.day.maxtemp_c}Cº
                    </h2>
                    <h2 className="text-center font-rubik">
                      {day.day.mintemp_c}Cº
                    </h2>
                    <h1 className=" text-sm text-center font-rubik">
                      {day.day.condition.text}{" "}
                    </h1>
                  </div>
                </div>
              );
            })}
        </div>
        <button onClick={scrollRight}>
          <FaArrowCircleRight className="w-12 h-12" />
        </button>
      </div>
    </div>
  );
};

export default HourWeather;
