import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import About from "./components/About/About";
import Discover from "./components/Discover/Discover";
import Search from "./components/Search/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
