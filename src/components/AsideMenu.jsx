import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import sunny from "/public/icons/wi-day-sunny.svg";
import cloudy from "/public/icons/wi-day-showers.svg";
import satellite from "/public/icons/satellite.svg";
import { GrWebcam } from "react-icons/gr";
import { CiMap } from "react-icons/ci";

export default function AsideMenu() {
  return (
    <Card className="h-[calc(100vh-2rem)]  max-w-[20rem] p-4 bg-blue-200 w-52 shadow-blue-gray-900/5">
      <div className="flex flex-col mb-1">
        <img src="./weather.png" className="h-28 w-28" alt="Logo" />
        <Typography
          className="text-2xl font-poppins font-bold"
          variant="h5"
          color="blue-gray"
        >
          Open Weather
        </Typography>
      </div>
      <List className="flex-col mt-12">
        <ListItem className="mb-4 hover:bg-bluehover transition-colors duration-600 ">
          <ListItemPrefix>
            <img src={sunny} className="h-7 w-7" alt="Weather Icon" />
          </ListItemPrefix>
          El tiempo en 7 dias
        </ListItem>
        <ListItem className="mb-4 hover:bg-bluehover">
          <ListItemPrefix>
            <img src={cloudy} className="h-7 w-7" alt="Weather Icon" />
          </ListItemPrefix>
          El tiempo en 14 días
        </ListItem>
        <ListItem className="mb-4 hover:bg-bluehover">
          <ListItemPrefix>
            <img src={satellite} className="h-7 w-7" alt="Weather Icon" />
          </ListItemPrefix>
          <Link to="/eltiempohoy">El tiempo hoy</Link>
          <ListItemSuffix>
            <Chip
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem className="mb-4 hover:bg-bluehover">
          <ListItemPrefix>
            <GrWebcam className="h-7 w-7" />
          </ListItemPrefix>
          Webcams
        </ListItem>
        <ListItem className="mb-4 hover:bg-bluehover">
          <ListItemPrefix>
            <CiMap className="h-7 w-7" />
          </ListItemPrefix>
          Mapa del tiempo
        </ListItem>
      </List>
    </Card>
  );
}
