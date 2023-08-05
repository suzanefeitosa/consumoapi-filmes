import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import styles from "./global.css";
import { useState, useEffect } from "react";
import stylesApp from "./App.module.css";

function App() {
  const imagePath = "https://image.tmdb.org/t/p/w500/";
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [favoriteChecked, setFavoriteChecked] = useState(false)
  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        var newMovies = [];
        if (localStorage.getItem("savedFavorites") != null) {
          var savedStorage = JSON.parse(localStorage.getItem("savedFavorites"));

          newMovies = data.results.map((movie) => {
            if (
              savedStorage.find((savedMovie) => savedMovie.id == movie.id) ==
              undefined
            ) {
              movie["isFavorite"] = false;
            } else {
              movie["isFavorite"] = true;
            }

            return movie;
          });
        } else {
          newMovies = data.results.map((movie) => {
            movie["isFavorite"] = false;
            return movie;
          });
        }

        setMovies(newMovies);
        setFilterMovies(newMovies);
      });
  }, []);

  const handleSearch = (event) => {
    var search = event.target.value.toUpperCase();

    setFilterMovies(
      movies.filter((movie) => {
        if(favoriteChecked){
          if (movie.title.toUpperCase().includes(search) && movie.isFavorite) {
            return movie;
          }
        }else if(movie.title.toUpperCase().includes(search)) {
          return movie;
        }
      })
    );
  };

  const handleShowFavorites = (event) => {
    setFavoriteChecked(event.target.checked)
    if (event.target.checked) {
      var showFavorites = movies.filter((movie) => {
        if (movie.isFavorite) {
          return movie;
        }
      });
      setFilterMovies(showFavorites);
    } else {
      setFilterMovies(movies);
    }

  };

  const handleStorage = (movie) => {
    var storageMovies = [];
    if (localStorage.getItem("savedFavorites") != null) {
      storageMovies = JSON.parse(localStorage.getItem("savedFavorites"));
      if (
        storageMovies.find((savedMovie) => savedMovie.id == movie.id) ==
        undefined
      ) {
        storageMovies.push(movie);
      } else {
        storageMovies = storageMovies.filter((savedMovie) => {
          if (savedMovie.id != movie.id) {
            return movie;
          }
        });
      }
    } else {
      storageMovies.push(movie);
    }

    localStorage.setItem("savedFavorites", JSON.stringify(storageMovies));
  };

  const handleAddFavorite = (id) => {
    setMovies(
      movies.map((movie) => {
        if (movie.id == id) {
          movie.isFavorite = !movie.isFavorite;
          handleStorage(movie);
          if(movie.isFavorite == false && favoriteChecked){
            setFilterMovies(filterMovies.filter((filterMovie) => {
              if(movie.id != filterMovie.id){
                return filterMovie
              }
            }))
          }
        }
        return movie;
      })
    );
  };

  return (
    <>
      <Header
        handleSearch={handleSearch}
        handleShowFavorites={handleShowFavorites}
      />

      {
        filterMovies.length > 0 
        ?
      filterMovies.map((movie) => {
        return (
          <Cards
            key={movie.id}
            id={movie.id}
            title={movie.title}
            description={movie.overview}
            rating={movie.vote_average}
            image={`${imagePath}${movie.poster_path}`}
            addMovie={handleAddFavorite}
            isFavorite={movie.isFavorite}
          />
        );
      })
      :<h1 className={stylesApp.noMovies}>Ops! No Movies Founded :(
      </h1>
      
      }

      <footer className={stylesApp.footer}>
        <p>Coded by Suzane Feitosa ♥</p>
      </footer>
    </>
  );
}

export default App;
