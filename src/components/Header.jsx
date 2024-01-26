import { useState } from "react";

export default function Header({ city, actualTemp, onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(search);
      setSearch("");
    }
  };
  console.log(actualTemp);

  return (
    <div className="pt-4 h-30 bg-gray-200 items-start justify-start  font-poppins text-3xl font-bold w-full ">
      <h1>{city}</h1>
      <h2 className="text-2xl font-poppins font-bold"> {actualTemp}ºC</h2>
      <input
        type="text"
        placeholder="Buscar por población"
        value={search}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
