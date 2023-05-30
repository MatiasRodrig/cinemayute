import React, { useEffect, useState } from "react";
import "./styles/dosd.css";

function DosD() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5e40e46ec5msh9a4794ebd9a29d5p1e2d3bjsnaaf8bfb7bb93",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://moviesdatabase.p.rapidapi.com/titles/x/upcoming", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

    return (
  <div className="section-2d-movies">
    <div className="grid-2d-movies">
      {movies.map((movie) => (
        <div key={movie.id} className="card">
          <a href="">
            <img src={movie.primaryImage?.url} alt="Imagen de la película" />
            <h1>{movie.titleText?.text}</h1>
          </a>
        </div>
      ))}
    </div>
  </div>
);
}

export default DosD;
