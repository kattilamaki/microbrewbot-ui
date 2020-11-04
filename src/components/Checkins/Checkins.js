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
        "https://api.untappd.com/v4/beer/checkins/9459?client_id=" +
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
    const checkins = this.state.checkins.map((checkin) => {
      return (
        <p>{checkin.created_at}</p>
      );
    });

    return (
    <div>{checkins}</div>
    );
  }
}

export default Checkins;
