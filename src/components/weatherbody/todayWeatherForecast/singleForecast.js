const SingleForecast = (props) => {
  return (
    <div className="single-hour-forecast">
      <p>{props.text1}</p>
      <img src={`./images/weather-icons/${props.icon}.svg`} alt="" />
      <p>{props.degree1}&deg;</p>
      {props.degree2 && <p>{props.degree2}&deg;</p>}
    </div>
  );
};

export default SingleForecast;
