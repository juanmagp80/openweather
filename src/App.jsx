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
      <Router>
        <Routes>
          <Route path="/14-dias" element={<FourteenDayWeather />}></Route>
          <Route path="/eltiempohoy" element={<TodayWeather />}></Route>
          <Route path="/webcam" element={<Webcam />}></Route>
          <Route path="/mapas" element={<Maps />}></Route>
          <Route path="/" element={<SevenDayWeather />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
