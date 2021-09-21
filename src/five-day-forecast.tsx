import axios from "axios";
import { useEffect } from "react";
import { CITY, API_KEY } from "./App";

export const Forecast = () => {
  const fetchForecastData = async () => {
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}`
    );
    const { list } = resp.data;
    let days: any = [];

    for (let i = 0; i < list.length; i += 8) {
      let temp = [];
      temp.push(new Date(list[i + 5].dt_txt));
      temp.push(list[i].weather[0].main);
      temp.push(list[i + 3].weather[0].description);
      temp.push(list[i].weather[0].icon);
      days.push(temp);
    }

    console.log(days);
  };
  useEffect(() => {
    fetchForecastData();
  }, []);

  return <div></div>;
};
