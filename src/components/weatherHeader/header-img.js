export default function WeatherHeaderImg(props) {
  return (
    <div className="img-box">
      <img
        src={`./images/weather-icons/${props.icon}.svg`}
        className="weather-header-img"
        alt=""
      />
    </div>
  );
}
