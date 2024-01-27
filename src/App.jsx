import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FourteenDayWeather from "./components/FourteenDayWeather";
import TodayWeather from "./components/TodayWeather";
import Webcam from "./components/Webcam";
import Maps from "./components/Maps";
import SevenDayWeather from "./components/SevenDayWeather";
import AsideMenu from "./components/AsideMenu";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex max-w-screen max-h-screen overflow-auto">
        <div className="flex-1">
          <AsideMenu />
        </div>
        <div className=" max-w-screen max-h-screen overflow-hidden">
          <Router>
            <Routes>
              <Route path="/14-dias" element={<FourteenDayWeather />}></Route>
              <Route path="/hoy" element={<TodayWeather />}></Route>
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
