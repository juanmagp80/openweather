import { FaSun, FaCloud, FaBolt, FaSnowflake, FaSmog } from "react-icons/fa";
import sunny from "../../public/sunny.jpeg";

const getWeatherIcon = (description) => {
  switch (description) {
    case "cielo claro":
      return <FaSun />;
    case "nubes":
      return <FaCloud />;
    case "tormenta":
      return <FaBolt />;
    case "nieve":
      return <FaSnowflake />;
    default:
      return <FaSmog />;
  }
};

const Card = ({ temp, description, dt, maxTemp, minTemp, wind }) => {
  const date = new Date(dt * 1000);
  const dayOfWeek = date.toLocaleDateString("es-ES", { weekday: "long" });
  const isSunny = description.includes("cielo claro");
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <div
      className={`flex flex-col items-center shadow-xl rounded p-4 m-2 w-28 h-70 ${
        isSunny ? "bg-yellow-200" : "bg-gray-200"
      }`}
      style={
        isSunny
          ? {
              backgroundImage: `url(${sunny})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="day text-lg font-bold">{dayOfWeek}</div>
      <div className="date text-sm text-gray-500">
        {date.toLocaleDateString()}
      </div>
      <div className="image mt-4">{getWeatherIcon(description)}</div>
      <button className="btn rounded bg-blue-500  btn-primary" disabled>
        {maxTemp}º
      </button>
      <button className="btn btn-primary" disabled>
        {minTemp}º
      </button>
      <div className="wind mt-4 text-sm text-gray-500">{wind} km/h</div>
    </div>
  );
};

export default Card;
