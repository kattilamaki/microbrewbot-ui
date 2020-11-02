import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import BarChart from './Charts/BarChart/BarChart';

class App extends Component {
  state = {
    beers: [],
    query: "",
  };

  handleInput = (event) => {
    this.setState({ query: event.target.value });
  };

  getBeers = () => {
    axios
      .get(
        "https://api.untappd.com/v4/search/beer?client_id=" +
          process.env.REACT_APP_CLIENT_ID +
          "&client_secret=" +
          process.env.REACT_APP_CLIENT_SECRET +
          "&q=" +
          this.state.query + '&limit=5'
      )
      .then((response) => {
        this.setState({ beers: response.data.response.beers.items });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const beers = this.state.beers.map((beer) => {
      return (
        <div>
          <p>
            {beer.beer.beer_name} - {beer.checkin_count}
          </p>
        </div>
      );
    });

    const bars = this.state.beers.map((beer) => {
      return ({x: beer.beer.beer_name, y: beer.checkin_count });
    });

    return (
      <div class="container-fluid">
        <div className="form-group">
          <label for="exampleInputPassword1">Search beer</label>
          <input
            type="search"
            className="form-control"
            id="exampleInputPassword1"
            onChange={this.handleInput}
          />
        </div>
        <button
          type="submit"
          onClick={this.getBeers}
          className="btn btn-primary"
        >
          Search
        </button>
        <div>{beers}</div>
        <BarChart data={bars}/>
      </div>
    );
  }
}

export default App;
