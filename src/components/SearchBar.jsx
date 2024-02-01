import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setLocation(
          `${response.data.city}, ${response.data.region}, ${response.data.country_name}`
        );
      } catch (error) {
        console.error("Error fetching location data: ", error);
      }
    };

    getLocation();
  }, []);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(search);
    setSearch("");
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(search);
      setSearch("");
    }
  };
  const handleSearchClick = () => {
    onSearch(search);
    setSearch("");
  };
  return (
    <>
      <form className="mb-1" onSubmit={handleFormSubmit}>
        <label
          htmlFor="default-search"
          className=" text-sm font-medium text-gray-900 sr-only dark:text-black"
        >
          Search
        </label>

        <input
          type="search"
          id="default-search"
          className=" w-60 h-12  text-xl font-poppins placeholder:text-gray-400 text-black border border-gray-300 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:gray-200 dark:focus:border-blue-500"
          placeholder="Ciudad"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearchClick}
          type="submit"
          className="text-black mr-20 ml-2 mt-2 bg-gray-400 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-gray-400 dark:hover:bg-gray-200 dark:focus:ring-blue-800"
        >
          Buscar
        </button>
      </form>
      <h1 className="text-white">{location}</h1>
    </>
  );
};

export default SearchBar;
