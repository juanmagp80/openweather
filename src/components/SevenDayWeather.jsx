import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Card from "./Card";
import Header from "./Header";
import * as ol from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

export default function SevenDayWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [wind, setWind] = useState(null);
  const [currentTemp, setCurrentTemp] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const mapRef = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!mapRef.current) return;

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLat(latitude);
      setLon(longitude);

      const map = new ol.Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new TileLayer({
            source: new XYZ({
              url: "https://tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png?appid=7d64ef67c50f7ef01de29cb2a7373069",
              attributions:
                'Map data &copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>',
            }),
          }),
        ],
        view: new ol.View({
          center: fromLonLat([longitude, latitude]),
          zoom: 4,
        }),
      });

      setMap(map);
    });
  }, [mapRef]);
  useEffect(() => {
    if (map && lat && lon) {
      map.getView().setCenter(fromLonLat([lon, lat]));
    }
  }, [map, lat, lon]);

  const onSearch = (searchValue) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=7d64ef67c50f7ef01de29cb2a7373069&units=metric`
      )

      .then((response) => {
        const { lat, lon } = response.data.coord;
        const { temp, temp_min, temp_max } = response.data.main;
        const windSpeed = response.data.wind.speed;
        setLat(lat);
        setLon(lon);
        setCurrentTemp(temp);
        setMaxTemp(temp_max);
        setMinTemp(temp_min);
        setWind(windSpeed);
        setCity(response.data.name);
        return axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=7d64ef67c50f7ef01de29cb2a7373069&lang=es&units=metric`
        );
      })
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    axios
      .get("http://ip-api.com/json")
      .then((response) => {
        const { lat, lon, city } = response.data;
        setCity(city);
        setLat(lat);
        setLon(lon);

        return axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=7d64ef67c50f7ef01de29cb2a7373069&lang=es&units=metric`
        );
      })
      .then((response) => {
        setWeatherData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (lat && lon) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7d64ef67c50f7ef01de29cb2a7373069&lang=es&units=metric`
        )
        .then((response) => {
          const currentTemp = response.data.main.temp;
          setCurrentTemp(currentTemp);
          console.log(currentTemp);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [lat, lon]);

  console.log(currentTemp);
  console.log(weatherData);

  return (
    <>
      <div className="flex flex-col w-screen max-h-screen overflow-hidden">
        <Header
          actualTemp={Math.round(currentTemp)}
          city={city}
          onSearch={onSearch}
        />
        <div className="flex max-w-screen max-h-screen overflow-hidden mt-20 ml-10 ">
          {weatherData &&
            weatherData.daily &&
            weatherData.daily.map((day, index) => (
              <Card
                temp={Math.round(day.temp.day)}
                description={day.weather[0].description}
                key={index}
                dt={day.dt}
                maxTemp={Math.round(day.temp.max)}
                minTemp={Math.round(day.temp.min)}
                wind={day.wind_speed}
                daily={day.pop}
              >
                <p>{day.temp && day.temp.day}</p>
                <p>
                  {day.weather && day.weather[0] && day.weather[0].description}
                </p>
              </Card>
            ))}
        </div>
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        <div ref={mapRef} style={{ width: "100%", height: "360px" }} />
      </div>
    </>
  );
}
