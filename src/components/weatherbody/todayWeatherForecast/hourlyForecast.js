import { useContext } from "react";
import { WeatherData } from "../../data/weatherData";
import logo from "../../../images/cloudy-day-1.svg"; //need to be change --------------s-s-s-s
import SingleForecast from "./singleForecast";

const HourlyForecast = () => {
  const { hourlyData } = useContext(WeatherData);

  return (
    <div className="today-forecast-section">
      <h6> Today </h6>
      <div className="today-forecast-weather">
        {hourlyData &&
          hourlyData.map((item, index) => (
            <SingleForecast
              key={index}
              icon={item.icon}
              text1={item.time}
              degree1={item.temp}
            ></SingleForecast>
          ))}
      </div>
      <hr />
    </div>
  );
};

export default HourlyForecast;
