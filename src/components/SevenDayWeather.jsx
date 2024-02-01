import React from "react";

import { useState, useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ActualDay from "./ActualDay";
import HourWeather from "./HourWeather";

function Clock({
  onSearch,
  searchedCity,
  setSearchedCity,
  displayedCity,
  location,
}) {
  const handleSearch = (city) => {
    setSearchedCity(city);
    console.log(city);
  };
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
    <div className="flex flex-col w-screen mb-20 justify-between mt-10">
      <div className="flex flex-col w-full  items-center justify-center">
        <h2 className="text-7xl text-white font-bold font-poppins">
          {time.toLocaleTimeString()}
        </h2>
        <h3 className="text-3xl text-white font-bold mt-2 font-poppins">
          {time.toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h3>

        <div className="flex w-full  items-center justify-center ml-32 mt-12 ">
          <div className="flex justify-center flex-col">
            <SearchBar
              onSearch={onSearch}
              searchedCity={searchedCity}
              location={location}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SevenDayWeather({ setWeatherDescription, weatherDescription }) {
  const [searchedCity, setSearchedCity] = useState("");
  const [displayedCity, setDisplayedCity] = useState("Buenos Aires"); // Añadido displayedCity como estado
  const [location, setLocation] = useState("");

  return (
    <>
      <Header />

      <Clock
        onSearch={setSearchedCity}
        searchedCity={searchedCity}
        displayedCity={displayedCity} // Pasando displayedCity a Clock
        location={location}
      />

      <div className="w-full col-span-1 gap-3 text-left ">
        <ActualDay
          searchedCity={searchedCity}
          displayedCity={displayedCity}
          location={location}
          setLocation={setLocation}
          setWeatherDescription={setWeatherDescription}
          weatherDescription={weatherDescription}
        />
      </div>
      <div className="w-full col-span-1 gap-3 text-left ">
        <HourWeather searchedCity={searchedCity} />
      </div>
    </>
  );
}

export default SevenDayWeather;
