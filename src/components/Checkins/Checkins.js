import React, { Component } from "react";
import axios from "axios";

class Checkins extends Component {
  constructor(props) {
    super(props);
    this.state = {
        checkins: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.untappd.com/v4/beer/checkins/" + this.props.beer + "?client_id=" +
          process.env.REACT_APP_CLIENT_ID +
          "&client_secret=" +
          process.env.REACT_APP_CLIENT_SECRET
      )
      .then((response) => {
        this.setState({checkins: response.data.response.checkins.items});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const scores = this.state.checkins.map((checkin) => {
      return (
      <p>{checkin.rating_score}</p>
      );
    });

    return (
    <div>{scores}</div>
    );
  }
}

export default Checkins;
