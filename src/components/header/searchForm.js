import { useState } from "react";

function SearchForm({ setCity, showSearchError, isErrorShown }) {
  const [searchValue, setSearchValue] = useState();

  function onTypeHanler(e) {
    if (isErrorShown) {
      showSearchError(false);
    }
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
          <img src="./images/icons/search-icon.svg" alt="" />
        </button>
      </div>
    </form>
  );
}
export default SearchForm;
