import { useContext } from "react";
import { WeatherData } from "../data/weatherData";
import WeatherMainInfo from "./weatherMainInfo";
import WeatherHeaderImg from "./header-img";
import LoadingEle from "../loadingEle.js";

function WeatherHeader() {
  const { todayWeatherData, isloading } = useContext(WeatherData);

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
            firstInfo={`${todayWeatherData.main.temp} `}
            secInfo={todayWeatherData.main.condition}
          />
          <WeatherHeaderImg icon={todayWeatherData.main.icon} />
        </>
      )}

      {/* if there is no data */}
      {isloading && (
        <>
          {/* city & country */}
          <LoadingEle styleClass="location">
            <LoadingEle styleClass="loading-city" />
            <LoadingEle styleClass="loading-country" />
          </LoadingEle>

          {/* degree & condition */}
          <LoadingEle styleClass="deg-status">
            <LoadingEle styleClass="loading-degree" />
            <LoadingEle styleClass="loading-condition" />
          </LoadingEle>

          {/* icon */}
          <LoadingEle styleClass="loading-img" />
        </>
      )}
    </div>
  );
}

export default WeatherHeader;
