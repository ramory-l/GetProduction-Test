import React from "react";
import "./App.css";
import Movie from "./components/Movie";
import Nav from "./components/Nav";
import { useQuery, gql } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";

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

function App() {
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
  return (
    <Router>
      <div className="App">
        <header className="App-Header">
          <Nav />
        </header>
        <div className="App-Container">{listOfMovies}</div>
      </div>
    </Router>
  );
}

export default App;
