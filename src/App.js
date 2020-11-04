import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import BarChart from "./Charts/BarChart/BarChart";
import ResultTable from "./components/ResultTable/ResultTable";
import Pagination from "./components/Pagination/Pagination";
import SearchForm from "./components/SearchForm/SearchForm";

class App extends Component {
  state = {
    beers: [],
    query: "",
    totalCount: 0,
    beerSelected: false,
    selectedBeer: null
  };

  handleInput = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSelection = (bid) => {
    this.setState({beerSelected: true, selectedBeer: bid});
  };

  getBeers = () => {
    axios
      .get(
        "https://api.untappd.com/v4/search/beer?client_id=" +
          process.env.REACT_APP_CLIENT_ID +
          "&client_secret=" +
          process.env.REACT_APP_CLIENT_SECRET +
          "&q=" +
          this.state.query +
          "&limit=6"
      )
      .then((response) => {
        this.setState({
          beers: response.data.response.beers.items,
          totalCount: response.data.response.found,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const beers = this.state.beers.map((beer) => {
      return (
        <tr onClick={() => this.handleSelection(beer.beer.bid)}>
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
        <SearchForm handleInput={this.handleInput} getBeers={this.getBeers} />
        <div>
          <ResultTable beers={beers} />
          <Pagination totalCount={this.state.totalCount} />
        </div>
        {this.state.beerSelected ? <Pagination totalCount={this.state.totalCount} /> : <BarChart data={bars} />}
      </div>
    );
  }
}

export default App;
