import React from "react";

const SearchForm = (props) => {
  return (
    <div>
      <div className="form-row">
        <div class="col">
          <input
            type="search"
            placeholder="Search beer"
            className="form-control"
            id="search-beers"
            onChange={props.handleInput}
          />
          <small id="searchHelp" class="form-text text-muted">
          Brewery name or beer name could be used
        </small>
        </div>
        <div class="col">
          <button
            type="submit"
            onClick={props.getBeers}
            className="btn btn-outline-primary"
          >
            Search
          </button>
        </div>
      </div>
      <div className="form-group">
        
      </div>
    </div>
  );
};

export default SearchForm;
