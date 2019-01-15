import React, { Component } from "react";
import "./style.css";
import Axios from "axios";
import API from "../utils/API";

class Search extends Component {
  state = {
    breed: ""
  };

  handleInputChange = event => {
    const breed = event.target.breed;
    this.setState({ breed });
  };

  handleSubmit = event => {
    Axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`);
  };

  render() {
    return (
      <div>
        <p>Please Type the Name of the Breed you Would Like to Search</p>
        <form className="form">
          <input
            value={this.state.breed}
            name="breed"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Breed Name"
          />
          <button className="btn btn-lg btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
