import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarChart from './Charts/BarChart/BarChart';

class App extends Component {
  state = {
    beers: [],
    query: '',
    totalCount: 0
  };

  handleInput = (event) => {
    this.setState({ query: event.target.value });
  };

  getBeers = () => {
    axios
      .get(
        'https://api.untappd.com/v4/search/beer?client_id=' +
          process.env.REACT_APP_CLIENT_ID +
          '&client_secret=' +
          process.env.REACT_APP_CLIENT_SECRET +
          '&q=' +
          this.state.query +
          '&limit=6'
      )
      .then((response) => {
        this.setState({ beers: response.data.response.beers.items, totalCount: response.data.response.found});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const beers = this.state.beers.map((beer) => {
      return (
        <tr>
          <td>{beer.beer.beer_name}</td>
          <td>{beer.brewery.brewery_name}</td>
          <td>{beer.checkin_count}</td>
        </tr>
      );
    });

    const bars = this.state.beers.map((beer) => {
      return { x: beer.beer.beer_name, y: beer.checkin_count };
    });

    return (
      <div class="container-sm">
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
        <div>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Beer</th>
                <th scope="col">Brewery</th>
                <th scope="col">Check-in #</th>
              </tr>
            </thead>
            <tbody>{beers}</tbody>
          </table>
          <p><b>Total found: {this.state.totalCount}</b></p>
        </div>
        <BarChart data={bars} />
      </div>
    );
  }
}

export default App;
