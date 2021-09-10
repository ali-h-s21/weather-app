import { useContext, useState } from "react";
import { WeatherData } from "../data/weatherData";
import WeatherMainInfo from "./weatherMainInfo";
import classes from "../../style/main.module.scss";

function WeatherHeader() {
  const { todayWeatherData, units, isloading } = useContext(WeatherData);

  // if (isloading) {
  //   return <div className={classes["weather-header"]}>loading...</div>;
  // }

  return (
    <div className={classes["weather-header"]}>
      <WeatherMainInfo
        boxStyle={classes["location"]}
        firstChildStyle={`${
          isloading ? classes["loading-city"] : classes["city"]
        }`}
        secChildStyle={`${
          isloading ? classes["loading-country"] : classes["contury"]
        }`}
        firstInfo={todayWeatherData && todayWeatherData.main.cityName}
        secInfo={todayWeatherData && todayWeatherData.main.country}
      />

      {/* <WeatherMainInfo
        boxStyle={classes["deg-status"]}
        firstChildStyle={classes["deg"]}
        secChildStyle={classes["status"]}
        firstInfo={`${todayWeatherData.main.temp} ${
          units === "imperial" ? "F°" : "C°"
        }`}
        secInfo={todayWeatherData.main.country}
      />

      <div className={classes["img-box"]}>
        <img
          src={`/images/weather-icons/${todayWeatherData.main.icon}.svg`}
          className={classes["weather-header-img"]}
          alt=""
        />
      </div> */}
    </div>
  );
}

export default WeatherHeader;
