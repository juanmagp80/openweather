import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FourteenDayWeather from "./components/FourteenDayWeather";
import TodayWeather from "./components/TodayWeather";
import Webcam from "./components/Webcam";
import Maps from "./components/Maps";
import SevenDayWeather from "./components/SevenDayWeather";
import { useState } from "react";

import "./App.css";

function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  return (
    <>
      <div className="relative w-screen h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute w-screen h-auto top-0 left-0 min-w-full min-h-full max-w-none object-cover"
        >
          <source src="/public/icons/nublado.mp4" type="video/mp4" />
        </video>
        <div className="relative  bg-opacity-0 h-screen">
          <Router>
            <Routes>
              <Route path="/14-dias" element={<FourteenDayWeather />}></Route>
              <Route path="/eltiempohoy" element={<TodayWeather />}></Route>
              <Route path="/webcam" element={<Webcam />}></Route>
              <Route path="/mapas" element={<Maps />}></Route>
              <Route path="/" element={<SevenDayWeather />}></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
