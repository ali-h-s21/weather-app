import classes from "../../style/main.module.scss";
import HourlyForecast from "./todayWeatherForecast/hourlyForecast";
import ForecastSection from "./forecastSection";

import ListOfDetails from "./detialSection/listOfDetails";

const WeatherBody = () => {
  return (
    <div className={classes["weather-body"]}>
      <HourlyForecast />
      <ForecastSection />
      <ListOfDetails />
    </div>
  );
};

export default WeatherBody;
