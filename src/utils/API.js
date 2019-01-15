import axios from "axios";

// Using Axios we export the object containing the methods
// we'll use for access the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get(`https://dog.ceo/api/breeds/image/random`);
  },
  getDogsOfBreed: function(breed) {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`);
  },
  getBaseBreedsList: function() {
    return axios.get(`https://dog.ceo/api/breeds/list`);
  }
};
