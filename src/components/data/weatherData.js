import React, { createContext, useState, useEffect } from "react";
import {
  fromattTodayWeather,
  formattHourlyForecast,
  formattDailyForecast,
} from "../../utils/formatWeatherData";

export const WeatherData = createContext({});

export function WeatherDataProvider(props) {
  const testKey = "f6694629600c07e9b0824433f7ba1497";
  const [isloading, setIsLoading] = useState(true);
  const [todayWeatherData, setTodayWeatherData] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);
  const [city, setCity] = useState("london");
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    async function fetchTodayWeather() {
      try {
        const coordRespon = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=f6694629600c07e9b0824433f7ba1497`
        );

        const coord = await coordRespon.json();
        if (coord.length > 0) {
          setIsLoading(true);
          const respon = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0].lat}&lon=${coord[0].lon}&appid=${testKey}&units=${units}`
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
          console.log(coord);
          alert("city NOt found");
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchTodayWeather();
  }, [city, units]);

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
      }}
    >
      {props.children}
    </WeatherData.Provider>
  );
}
