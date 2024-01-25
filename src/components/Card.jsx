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

const Card = ({ temp, description, dt }) => {
  console.log(dt);
  const date = new Date(dt * 1000);
  const dayOfWeek = date.toLocaleDateString("es-ES", { weekday: "long" });
  const isSunny = description.includes("cielo claro");

  return (
    <div
      className={`flex flex-col items-center shadow-xl rounded p-4 m-2 w-32 h-52 ${
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
      <p>{dayOfWeek}</p>
      <p>{temp}º</p>
      <p> {description}</p>
      {getWeatherIcon(description)}
    </div>
  );
};

export default Card;
