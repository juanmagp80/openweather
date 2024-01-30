import React from "react";

import { useState, useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ActualDay from "./ActualDay";
import HourWeather from "./HourWeather";

function Clock(city) {
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
    <div className="flex w-screen mb-20 justify-between mt-10">
      <div className="flex w-1/2 items-center justify-center">
        <div className="flex flex-col">
          <h2 className="font-bold font-poppins text-white text-7xl">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h2>
          <div className="flex  ">
            <h3 className="font-bold font-poppins text-white text-xl ">
              {time.toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <div className="flex flex-col">
          <SearchBar city={city} />
        </div>
      </div>
    </div>
  );
}

function SevenDayWeather() {
  return (
    <>
      <Header />

      <Clock />

      <div className="w-full col-span-1 gap-3 text-left md:col-span-2">
        <ActualDay />
      </div>
      <div className="w-full col-span-1 gap-3 text-left md:col-span-2">
        <HourWeather />
      </div>
    </>
  );
}

export default SevenDayWeather;
