import React from "react";
import "./styles/Movie.css";
import { Link } from "react-router-dom";

function Movie(props) {
  return (
    <div className="Movie">
      <Link to={`/movie/${props.id}`}>
        <img className="Movie-Image" src={props.img} alt="Movie"></img>
      </Link>
      <div className="Movie-Info">
        <Link to={`/movie/${props.id}`}>
          <span className="Movie-Title">{props.title}</span>
        </Link>
        <div className="Movie-Description">{props.description}</div>
      </div>
    </div>
  );
}

export default Movie;
