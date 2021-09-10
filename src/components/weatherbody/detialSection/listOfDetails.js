import { useContext } from "react";
import DetailCard from "./detailCard";
import { WeatherData } from "../../data/weatherData";
const ListOfDetails = () => {
  const { todayWeatherData } = useContext(WeatherData);

  return (
    <div className="details-section">
      <h6> details</h6>

      <div className="details">
        {todayWeatherData &&
          Object.keys(todayWeatherData.details).map((key, index) => (
            <DetailCard
              key={index}
              iconName={key}
              title={key.split("_").join(" ")}
              content={todayWeatherData.details[key]}
            />
          ))}
      </div>
    </div>
  );
};

export default ListOfDetails;
