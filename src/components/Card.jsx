import { FaSun, FaCloud, FaBolt, FaSnowflake, FaSmog } from "react-icons/fa";
import SvgComponent from "../../public/icons/DaySunny";
import CloudyIcon from "../../public/icons/CloudyIcon";

const getWeatherIcon = (description) => {
  console.log(`Description: ${description}`);
  switch (description) {
    case "cielo claro":
      return <SvgComponent />;
    case "nubes":
      return <CloudyIcon />;
    case "tormenta":
      return <FaBolt />;
    case "nieve":
      return <FaSnowflake />;
    default:
      return <FaSmog />;
  }
};

const Card = ({ temp, description, dt, maxTemp, minTemp, wind, daily }) => {
  const date = new Date(dt * 1000);
  const dayOfWeek = date.toLocaleDateString("es-ES", { weekday: "long" });
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <div className="flex flex-col bg-indigo-100 items-center justify-between shadow-xl rounded p-4 m-2 w-28 h-full">
      <div className=" flex flex-col items-center rounded w-full h-full flex-1">
        <div className="day text-lg font-bold">{dayOfWeek}</div>
        <div className="date text-sm text-black">
          {date.toLocaleDateString()}
        </div>
      </div>
      <div className=" flex flex-col items-center rounded w-full h-full flex-1">
        <div className="image mt-4">{getWeatherIcon(description)}</div>
      </div>
      <div className=" flex flex-col items-center rounded w-full h-full flex-1">
        <button
          className="btn rounded bg-red-400 py-1 px-2 mt-2 btn-primary"
          disabled
        >
          {maxTemp}ºC
        </button>
        <button
          className="btn  bg-green-500 rounded py-1 px-2 mt-2 btn-primary"
          disabled
        >
          {minTemp}ºC
        </button>
      </div>
      <div className="wind mt-4 text-sm text-black">{wind} km/h</div>
      <div className="temp mt-4 text-center text-sm font-bold">
        {daily}% Prob Lluvia
      </div>
    </div>
  );
};

export default Card;
