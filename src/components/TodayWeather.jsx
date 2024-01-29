import React from "react";
import * as ol from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

function TodayWeather({ lat, lon, setLat, setLon }) {
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const initialMap = new ol.Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new TileLayer({
          source: new XYZ({
            url: "https://tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=7d64ef67c50f7ef01de29cb2a7373069",
            attributions:
              'Map data &copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>',
          }),
        }),
      ],
      view: new ol.View({
        center: fromLonLat([0, 0]),
        zoom: 4,
      }),
    });

    setMap(initialMap);

    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        const latitude = Number(response.data.latitude);
        const longitude = Number(response.data.longitude);
        setLat(latitude);
        setLon(longitude);

        initialMap.getView().setCenter(fromLonLat([longitude, latitude]));
      })
      .catch((error) => {
        console.log("Error getting location data", error);
      });
  }, [mapRef]);

  useEffect(() => {
    if (map && lat && lon) {
      map.getView().setCenter(fromLonLat([lon, lat]));
    }
  }, [map, lat, lon]);

  return (
    <div>
      <div style={{ width: "100%", height: "500px" }}>
        <div ref={mapRef} style={{ width: "100%", height: "500px" }} />
      </div>
    </div>
  );
}

export default TodayWeather;
