import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, CITY } from "./App";

export const CurrentWeather = () => {
  const [currentData, setCurrentData] = useState();

  const fetchCurrentWeatherData = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`
    );
    setCurrentData(response.data.main.temp);
  };
  useEffect(() => {
    fetchCurrentWeatherData();
  }, []);
  return (
    <div>
      <h2>Current Temprature</h2>
      <span>{currentData}</span>
    </div>
  );
};
