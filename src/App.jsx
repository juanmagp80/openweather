import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FourteenDayWeather from "./components/FourteenDayWeather";
import TodayWeather from "./components/TodayWeather";
import Webcam from "./components/Webcam";
import Maps from "./components/Maps";
import SevenDayWeather from "./components/SevenDayWeather";
import { useState, useEffect } from "react";

import "./App.css";
import ActualDay from "./components/ActualDay";
function BackgroundVideo({ weatherDescription }) {
  const videoPath = getBackgroundVideo(weatherDescription);
  console.log(videoPath);

  return (
    <video
      key={videoPath}
      autoPlay
      loop
      muted
      className="absolute w-screen h-auto top-0 left-0 min-w-full min-h-full max-w-none object-cover"
    >
      <source src={videoPath} type="video/mp4" />
    </video>
  );
}

function getBackgroundVideo(weatherDescription) {
  console.log("Descripción del clima recibida:", weatherDescription);

  if (
    weatherDescription === "Soleado" ||
    weatherDescription === "Parcialmente_nublado" ||
    weatherDescription === "Despejado"
  ) {
    return "../public/icons/soleado.mp4";
  } else {
    return "../public/icons/nublado.mp4 ";
  }
}

function App() {
  const [weatherDescription, setWeatherDescription] = useState("");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  useEffect(() => {
    console.log(weatherDescription);
  }, [weatherDescription]);
  return (
    <>
      <div className="relative w-screen h-screen">
        <BackgroundVideo weatherDescription={weatherDescription} />
        <div className="relative  bg-opacity-0 h-screen">
          <Router>
            <Routes>
              <Route path="/14-dias" element={<FourteenDayWeather />}></Route>
              <Route
                path="/eltiempohoy"
                element={
                  <ActualDay setWeatherDescription={setWeatherDescription} />
                }
              ></Route>
              <Route
                path="/video"
                element={
                  <BackgroundVideo weatherDescription={weatherDescription} />
                }
              ></Route>
              <Route path="/webcam" element={<Webcam />}></Route>
              <Route path="/mapas" element={<Maps />}></Route>
              <Route
                path="/"
                element={
                  <SevenDayWeather
                    setWeatherDescription={setWeatherDescription}
                    weatherDescription={weatherDescription}
                  />
                }
              ></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
