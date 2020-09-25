import React from "react";
import "./styles/Movie.css";

function Movie(props) {
  return (
    <div className="Movie">
      <img className="Movie-Image" src={props.img} alt="Movie"></img>
      <div className="Movie-Info">
        <span className="Movie-Title">{props.title}</span>
        <div className="Movie-Description">{props.description}</div>
      </div>
    </div>
  );
}

export default Movie;
