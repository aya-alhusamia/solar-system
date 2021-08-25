import React from "react";

const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <div class="searcWrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="Search For Planet Name..."
            onChange={(event) => props.setQuery(event.target.value)}
          />
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
