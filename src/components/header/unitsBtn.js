import { useContext } from "react";
import { WeatherData } from "../data/weatherData";
import classes from "../../style/main.module.scss";

const UnitsBtn = () => {
  const { units, setUnits } = useContext(WeatherData);

  function switchUnitHandler(e) {
    setUnits(e.target.value);
  }

  return (
    <div className={classes.wrapper}>
      <input
        type="radio"
        name="unit"
        id="option-1"
        value="imperial"
        className={classes["option__1"]}
        checked={units === "imperial" ? true : false}
        onChange={switchUnitHandler}
      />
      <input
        type="radio"
        name="unit"
        id="option-2"
        value="metric"
        checked={units === "metric" ? true : false}
        className={classes["option__2"]}
        onChange={switchUnitHandler}
      />
      <label
        htmlFor="option-1"
        className={`${classes["option"]}   ${classes["option-1"]}`}
      >
        <span>F&deg;</span>
      </label>
      <label
        htmlFor="option-2"
        className={`${classes["option"]}  ${classes["option-2"]}`}
      >
        <span>C&deg;</span>
      </label>
    </div>
  );
};

export default UnitsBtn;
