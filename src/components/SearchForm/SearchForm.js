import React from "react";

const SearchForm = (props) => {
  return (
    <div className="form-group">
          <label for="exampleInputPassword1">Search beer</label>
          <input
            type="search"
            className="form-control"
            id="exampleInputPassword1"
            onChange={props.handleInput}
          />
          <button
            type="submit"
            onClick={props.getBeers}
            className="btn btn-primary"
          >
            Search
          </button>
        </div>
  );
};

export default SearchForm;
