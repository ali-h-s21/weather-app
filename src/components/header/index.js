import SearchForm from "./searchForm";
import UnitsBtn from "./unitsBtn";

const Header = () => {
  return (
    <header className="header">
      <img
        src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
        style={{ maxWidth: "100px", height: "auto" }}
        alt="openWeatherLogo"
      />
      <SearchForm />
      <UnitsBtn />
    </header>
  );
};
export default Header;
