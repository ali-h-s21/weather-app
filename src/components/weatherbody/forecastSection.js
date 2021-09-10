import { useContext } from "react";
import { WeatherData } from "../data/weatherData";
import SingleForecast from "./todayWeatherForecast/singleForecast";
import LoadingEle from "../loadingEle.js";

const ForecastSection = () => {
  const { dailyForecast, isloading } = useContext(WeatherData);
  const numOfLoadingEle = Array.from(Array(8).keys());

  return (
    <div className="forecast-section">
      {isloading &&
        numOfLoadingEle.map((ele, index) => (
          <LoadingEle styleClass="loading-day-forecast" key={index} />
        ))}
      {!isloading &&
        dailyForecast.map((item, index) => (
          <SingleForecast
            key={index}
            text1={item.day}
            degree1={item.max_temp}
            degree2={item.min_temp}
            icon={item.icon}
          />
        ))}
    </div>
  );
};
export default ForecastSection;
