import React from "react";

function Header() {
  return (
    <>
      <div className="flex justify-around bg-gray-200">
        <div className="flex ">
          <img src="./weather.png" alt="weather" className="h-28 w-28" />
          <h1 className="text-4xl font-bold mt-8">Open Weather</h1>
        </div>
        <div className="flex">
          <h1 className="text-4xl font-bold mt-8">Cº/Fº</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
