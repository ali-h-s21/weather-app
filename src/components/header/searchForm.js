import { WeatherData } from "../data/weatherData";
import { useContext, useState } from "react";

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
      <div className="search">
        <input
          type="text"
          className="searchInput"
          placeholder="City"
          required
          onChange={onTypeHanler}
        />
        <button type="submit" className="searchButton">
          <img src="/images/icons/search-icon.svg" alt="" />
        </button>
      </div>
    </form>
  );
}
export default SearchForm;
