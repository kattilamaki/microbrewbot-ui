import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import BarChart from "./Charts/BarChart/BarChart";
import ResultTable from "./components/ResultTable/ResultTable";
import Pagination from "./components/Pagination/Pagination";
import SearchForm from "./components/SearchForm/SearchForm";
import Checkins from "./components/Checkins/Checkins";
import RequestsLeft from "./components/RequestsLeft/RequestsLeft";

class App extends Component {

    constructor(props) { 
     super(props);
     this.state = {
      beers: [],
      query: "",
      totalCount: 0,
      beerSelected: false,
      selectedBeer: null,
      errorMessage: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.getBeers = this.getBeers.bind(this);
  }

  // Put focus automatically to the only input field
  componentDidMount() {
    const input = document.querySelector("input");
    input.focus();
  }

  // Update search query from input field
  handleInput = (event) => {
    this.setState({ query: event.target.value });
  };

  // Store selected beer for additional details
  handleSelection = (bid) => {
    this.setState({beerSelected: true, selectedBeer: bid});
  };

  // Make API request and get secrets from .env file. Show errors on ui
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
        this.setState({
          errorMessage: err.response.data.meta.error_detail
        });
      });
  };

  // Parse used data from the response
  render() {
    const beers = this.state.beers.map((beer) => {
      return (
        <tr onClick={() => this.handleSelection(beer.beer.bid)}>
          <td><p className="text-primary">{beer.beer.beer_name}</p></td>
          <td>{beer.brewery.brewery_name}</td>
          <td>{beer.checkin_count}</td>
        </tr>
      );
    });

    // Format data for Victory bar chart
    const bars = this.state.beers.map((beer) => {
      return { x: beer.beer.beer_name, y: beer.checkin_count };
    });

    return (
      <div class="container-sm">
        <h2>microbrebot</h2>
        <p>Search beers, get total checkin counts and beer related ratings in from one app</p>
        <RequestsLeft message={this.state.errorMessage} />
        <SearchForm handleInput={this.handleInput} getBeers={this.getBeers} />
        <div>
          <ResultTable beers={beers} />
          <Pagination totalCount={this.state.totalCount} />
        </div>
        {this.state.beerSelected ? <Checkins beer={this.state.selectedBeer}/> : <BarChart data={bars} />}
      </div>
    );
  }
}

export default App;
