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
    <div className="flex flex-col md:flex-row w-screen mb-20 justify-between mt-10">
      <div className="flex w-full md:w-1/2 items-center justify-center">
        {/* Resto del código */}
      </div>
      <div className="flex w-full md:w-1/2 items-center justify-center mt-4 md:mt-0">
        <div className="flex flex-col">
          <SearchBar
            onSearch={onSearch}
            searchedCity={searchedCity}
            location={location}
          />
        </div>
      </div>
    </div>
  );
}

function SevenDayWeather({
  displayedCity,
  setWeatherDescription,
  weatherDescription,
}) {
  const [searchedCity, setSearchedCity] = useState("");
  const [city, setCity] = useState("Buenos Aires");
  const [location, setLocation] = useState("");

  return (
    <>
      <Header />

      <Clock
        onSearch={setSearchedCity}
        searchedCity={searchedCity}
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
