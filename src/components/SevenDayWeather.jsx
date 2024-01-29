import React from "react";

import { useState, useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ActualDay from "./ActualDay";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h2 className="font-bold font-poppins text-7xl">
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </h2>
      <div className="flex w-screen ml-2">
        <h3 className="font-bold font-poppins text-xl ">
          {time.toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </h3>
      </div>
    </div>
  );
}

function SevenDayWeather(city) {
  return (
    <>
      <Header />
      <div className="relative z-0 grid justify-center min-h-screen gap-3 p-8 bg-white">
        <div className="grid grid-cols-2 ml-80 mt-20 gap-2">
          <Clock />

          <SearchBar city={city} />
        </div>
        <ActualDay />
      </div>
    </>
  );
}

export default SevenDayWeather;
