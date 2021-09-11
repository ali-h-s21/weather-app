import SearchForm from "./searchForm";
import UnitsBtn from "./unitsBtn";
import Error from "../error";
import { useContext } from "react";
import { WeatherData } from "../data/weatherData";

const Header = () => {
  const { units, setUnits, showSearchError, setShowSearchError, setCity } =
    useContext(WeatherData);
  return (
    <header className="header">
      {showSearchError && <Error errorMsg="ERROR: City Not Found" />}

      <img
        className="logo"
        src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
        style={{ maxWidth: "100px", height: "auto" }}
        alt="openWeatherLogo"
      />
      <SearchForm
        showSearchError={setShowSearchError}
        isErrorShown={showSearchError}
        setCity={setCity}
      />
      <UnitsBtn units={units} toggleUnits={setUnits} />
    </header>
  );
};
export default Header;
