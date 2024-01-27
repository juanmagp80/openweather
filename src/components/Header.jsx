import { input } from "@material-tailwind/react";
import { useState } from "react";

export default function Header({ city, actualTemp, onSearch }) {
  const [search, setSearch] = useState("");
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
  console.log(actualTemp);

  return (
    <>
      <div className=" overflow-hidden max-w-screen max-h-screen h-40 bg-sky-900 ">
        <form onSubmit={handleFormSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="flex  ml-12">
            <div className="inset-y-0  flex items-center"></div>
            <input
              type="search"
              id="default-search"
              className=" w-96 h-12 p-4 mt-2 ps-10 block text-xl font-poppins placeholder:text-gray-400 text-black border border-gray-300 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ciudad"
              value={search}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSearchClick}
              type="submit"
              className="text-white ml-2 mt-2 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buscar
            </button>
          </div>
        </form>
        <div className="flex ">
          <div className="pt-4 h-3 flex ml-12 text-white font-poppins text-3xl font-bold ">
            <h1>{city}</h1>
          </div>
          <div className="flex mt-5 ml-10 ">
            <h2 className="text-2xl text-white font-poppins font-bold">
              {" "}
              {actualTemp}ºC
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
