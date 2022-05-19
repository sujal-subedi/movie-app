import axios from "axios";
import React, { useState } from "react";

const Movie = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);

  const fetchMovie = (e) => {
    e.preventDefault();

    axios
      .get(`https://www.omdbapi.com/?s=${query}&apikey=932403ef`)
      .then((response) => {
        console.log(response);
        setMovie(response.data.Search);
      });
  };
  return (
    <>
      <div className="nav">
        <input
          type="text"
          className="search-box"
          placeholder="Search Here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="button" onClick={fetchMovie}>
          Fetch Movie
        </button>
      </div>

      <div>
        <div className="row">
          {movie.map((value) => {
            return (
              <div className="column">
                <div key={value.imdbID} className="card">
                  <img className="movie-poster" src={value.Poster} />
                  <div className="card-body">
                    <h3 className="movie-title">{value.Title}</h3>
                    <h5 className="movie-year">Release Year: {value.Year}</h5>
                    <h5 className="movie-type">Type: {value.Type}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movie;
