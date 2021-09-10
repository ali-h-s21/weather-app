import { WeatherData } from "../data/weatherData";
import { useContext, useState } from "react";
import classes from "../../style/main.module.scss";

function SearchForm() {
  const [searchValue, setSearchValue] = useState();
  const { setCity } = useContext(WeatherData);

  function onTypeHanler(e) {
    setSearchValue(e.target.value);
  }

  function onSearchHanler(e) {
    e.preventDefault();
    setCity(searchValue);
  }

  return (
    <form onSubmit={onSearchHanler}>
      <div className={classes["search"]}>
        <input
          type="text"
          className={classes["searchInput"]}
          placeholder="City"
          required
          onChange={onTypeHanler}
        />
        <button type="submit" className={classes["searchButton"]}>
          <img src="/images/icons/search-icon.svg" />
        </button>
      </div>
    </form>
  );
}
export default SearchForm;
