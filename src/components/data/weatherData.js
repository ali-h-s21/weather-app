import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import {
  fromattTodayWeather,
  formattHourlyForecast,
  formattDailyForecast,
} from "../../utils/formatWeatherData";

export const WeatherData = createContext({});
export function WeatherDataProvider(props) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [isloading, setIsLoading] = useState(true);
  const [todayWeatherData, setTodayWeatherData] = useState("");
  const [dailyForecast, setDailyForecast] = useState("");
  const [hourlyData, setHourlyData] = useState("");
  const [city, setCity] = useState("london");
  const [units, setUnits] = useState("metric");
  const [showSearchError, setShowSearchError] = useState(false);

  useEffect(() => {
    async function fetchTodayWeather() {
      try {
        const coordRespon = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
        );
        const coord = await coordRespon.json();

        if (coord.length > 0) {
          // if found the entered city
          localStorage.setItem("lastSucssesfullSearch", city);
          setIsLoading(true);
          setTodayWeatherData("");
          setHourlyData("");
          setDailyForecast("");

          const respon = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0].lat}&lon=${coord[0].lon}&appid=${apiKey}&units=${units}`
          );
          const data = await respon.json();

          const formattedData = fromattTodayWeather(data.current, coord, units);
          const formattedHourlyData = formattHourlyForecast(data.hourly);
          const formattedDailyForecast = formattDailyForecast(data.daily);

          setTodayWeatherData(formattedData);
          setHourlyData(formattedHourlyData);
          setDailyForecast(formattedDailyForecast);
          setIsLoading(false);
        } else {
          setCity(localStorage.getItem("lastSucssesfullSearch"));
          setShowSearchError(true);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchTodayWeather();
  }, [city, units, apiKey]);

  return (
    <WeatherData.Provider
      value={{
        isloading,
        dailyForecast,
        todayWeatherData,
        hourlyData,
        city,
        setCity,
        units,
        setUnits,
        setShowSearchError,
        showSearchError,
      }}
    >
      {props.children}
    </WeatherData.Provider>
  );
}
