import { FaSun, FaCloud, FaBolt, FaSnowflake, FaSmog } from "react-icons/fa";
import SvgComponent from "../../public/icons/DaySunny";
import CloudyIcon from "../../public/icons/CloudyIcon";
import ClaroNubes from "../../public/icons/claroNubes";
import DaySunny from "../../public/icons/DaySunny";
import DiaClaro from "../../public/icons/DiaClaro";
import Cloudy from "../../public/icons/Cloudy";
import NubesDispersas from "../../public/icons/NubesDispersas";
import MuyNuboso from "../../public/icons/MuyNuboso";

const getWeatherIcon = (description) => {
  console.log(`Description: ${description}`);
  switch (description) {
    case "algo de nubes":
      return <DiaClaro />;
    case "cielo claro":
      return <DiaClaro />;
    case "nubes":
      return <Cloudy />;
    case "tormenta":
      return <FaBolt />;
    case "nieve":
      return <FaSnowflake />;
    case "nubes dispersas":
      return <NubesDispersas />;
    case "muy nuboso":
      return <Cloudy />;
    default:
      return <DiaClaro />;
  }
};

const Card = ({ temp, description, dt, maxTemp, minTemp, wind, daily }) => {
  const date = new Date(dt * 1000);
  const dayOfWeek = date.toLocaleDateString("es-ES", { weekday: "long" });
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  console.log(daily);
  console.log(description);

  return (
    <div className="flex flex-col bg-gray-200 items-center shadow-xl rounded-xl m-6 w-26 h-full">
      <div className=" flex flex-col items-center rounded w-full h-full flex-1">
        <div className="day text-lg font-bold">{dayOfWeek}</div>
        <div className="date text-sm text-black">
          {date.toLocaleDateString()}
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-full bg-blue-400">
        {getWeatherIcon(description)}
      </div>
      <p className="text-sm font-poppins font-bold text-black">{description}</p>

      <div className=" flex flex-col items-center justify-center rounded w-full h-full flex-1 p-0 m-0">
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
