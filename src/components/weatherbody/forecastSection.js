import { useContext } from "react";
import { WeatherData } from "../data/weatherData";
import SingleForecast from "./todayWeatherForecast/singleForecast";

const ForecastSection = () => {
  const { dailyForecast } = useContext(WeatherData);

  return (
    <div className="forecast-section">
      {dailyForecast &&
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
