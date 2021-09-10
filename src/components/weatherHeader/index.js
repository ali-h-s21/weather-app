import { useContext } from "react";
import { WeatherData } from "../data/weatherData";
import WeatherMainInfo from "./weatherMainInfo";
import WeatherHeaderImg from "./header-img";
import LoadingEle from "../loadingEle.js";

function WeatherHeader() {
  const { todayWeatherData, units, isloading } = useContext(WeatherData);

  return (
    <div className="weather-header">
      {/* if there is data  */}

      {!isloading && (
        <>
          <WeatherMainInfo
            boxStyle="location"
            firstChildStyle="city"
            secChildStyle="contury"
            firstInfo={todayWeatherData.main.cityName}
            secInfo={todayWeatherData.main.country}
          />
          <WeatherMainInfo
            boxStyle="deg-status"
            firstChildStyle="deg"
            secChildStyle="status"
            firstInfo={`${todayWeatherData.main.temp} ${
              units === "imperial" ? "F°" : "C°"
            }`}
            secInfo={todayWeatherData.main.condition}
          />
          <WeatherHeaderImg icon={todayWeatherData.main.icon} />
        </>
      )}

      {/* if there is no data */}
      {isloading && (
        <>
          {/* city & country */}
          <LoadingEle style="location">
            <LoadingEle style="loading-city" />
            <LoadingEle style="loading-country" />
          </LoadingEle>

          {/* degree & condition */}
          <LoadingEle style="deg-status">
            <LoadingEle style="loading-degree" />
            <LoadingEle style="loading-condition" />
          </LoadingEle>

          {/* icon */}
          <LoadingEle style="loading-img" />
        </>
      )}
    </div>
  );
}

export default WeatherHeader;
