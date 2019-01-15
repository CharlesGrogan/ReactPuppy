import React from "react";
import "./style.css";
/*
handleChoice = event => {
   const { up, down } = event.target; 
  alert("You can do it!");
};
*/

function Discover(props) {
  return (
    <div>
      <div className="text-center">
        <h2>Make New Friends</h2>
        <h3>Click The Thumbs Up If You Would Like To Meet The Pup!</h3>
        <div className="img-container">
          <img src="https://via.placeholder.com/350x400" alt="Cute Puppy!" />
        </div>
        <div className="content">
          <span className="thumbsDown" />
          <span className="thumbsUp" />
        </div>
      </div>
      <h3 className="text-center mt-5">
        You've made friends with {props.matches} puppys today!
      </h3>
    </div>
  );
}

export default Discover;
