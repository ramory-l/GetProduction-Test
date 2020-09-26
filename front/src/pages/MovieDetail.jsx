import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./styles/HomePage.css";
import { useLocation } from "react-router";
import "./styles/MovieDetail.css";

const GET_MOVIE = gql`
  query($id: ID) {
    movie(id: $id) {
      id
      name
      description
      img
    }
  }
`;

function MovieDetail(props) {
  var location = useLocation();
  let id = location.pathname.split("/")[2];
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="MovieDetail">
      Окей Гугл! {data.movie.name}
      <a href="/">Назад</a>
    </div>
  );
}

export default MovieDetail;
