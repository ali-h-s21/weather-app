export default function WeatherMainInfo(props) {
  return (
    <div className={props.boxStyle}>
      <span className={props.firstChildStyle}>{props.firstInfo}</span>
      <span className={props.secChildStyle}>{props.secInfo}</span>
    </div>
  );
}
