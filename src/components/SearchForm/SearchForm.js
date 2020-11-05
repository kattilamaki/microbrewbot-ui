import React from "react";

const SearchForm = (props) => {
  return (
    <div>
      <div className="form-row">
        <div className="col">
          <input
            type="search"
            placeholder="Search beer"
            className="form-control"
            id="search-beers"
            onChange={props.handleInput}
          />
          <small id="searchHelp" className="form-text text-muted">
          Brewery name or beer name could be used
        </small>
        </div>
        <div className="col">
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
