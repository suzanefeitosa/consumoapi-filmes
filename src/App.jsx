import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import styles from "./global.css";
import { useState, useEffect } from "react";
import { APIKey } from "./config/key";
import stylesApp from "./App.module.css";



function App() {
  const imagePath = "https://image.tmdb.org/t/p/w500/";

  const [movies, setMovies] = useState([]);

  const key = import.meta.env.VITE_API_KEY

  const handleAddMovie = (id) => {
    setMovies(
      movies.map((movie) => {
        if (movie.id == id) {
          movie.isFavorite = !movie.isFavorite;
        }
        return movie;
      })
    );
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        var newMovies = data.results.map((movie) => {
          movie["isFavorite"] = false;
          return movie;
        });
        setMovies(newMovies);
      });
  }, []);

  return (
    <>
      <Header />

      {movies.map((movie) => {
        return (
          <Cards
            key={movie.id}
            id={movie.id}
            title={movie.title}
            description={movie.overview}
            rating={movie.vote_average}
            image={`${imagePath}${movie.poster_path}`}
            addMovie={handleAddMovie}
            isFavorite={movie.isFavorite}
          />
        );
      })}

      <footer className={stylesApp.footer}>
        <p>Coded by Suzane Feitosa ♥</p>
      </footer>
    </>
  );
}

export default App;
