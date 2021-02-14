import React, { Component } from "react";
import axios from "axios";

import "./App.css";

import User from "./Components/User";

class App extends Component {
  state = {
    user: [],
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/omaddoc")
      .then((res) => {
        console.log(res.data);
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://api.github.com/users/omaddoc/followers")
      .then((res) => {
        console.log(res.data);
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <User user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
