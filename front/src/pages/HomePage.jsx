import React from "react";
import Movie from "../components/Movie";
import { useQuery, gql } from "@apollo/client";
import "./styles/HomePage.css";

const GET_MOVIES = gql`
  query {
    movies {
      id
      name
      genre
      description
      img
    }
  }
`;

function HomePage(props) {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const listOfMovies = data.movies.map((movie) => {
    return (
      <Movie
        key={movie.id}
        title={movie.name}
        description={movie.description}
        img={movie.img}
      />
    );
  });
  return <div className="Home">{listOfMovies}</div>;
}

export default HomePage;
