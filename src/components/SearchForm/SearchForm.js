import React from "react";

const SearchForm = (props) => {
  return (
    <div>
      <div className="form-group">
        <label for="exampleInputPassword1">Search beer</label>
        <input
          type="search"
          className="form-control"
          id="exampleInputPassword1"
          onChange={props.handleInput}
        />
        <small id="searchHelp" class="form-text text-muted">Brewery name or beer name could be used</small>
      </div>
      <div className="form-group">
        <button
          type="submit"
          onClick={props.getBeers}
          className="btn btn-primary"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
