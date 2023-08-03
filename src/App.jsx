import { Cards } from "./components/Cards"
import { Header } from "./components/Header"
import styles from "./global.css"
import { useState, useEffect } from "react"
import {APIKey} from "./config/key"
import stylesApp from "./App.module.css"



function App() {

  const imagePath = 'https://image.tmdb.org/t/p/w500/'


  const [movies, setMovies] = useState([]);
  const [likeButton, setLikeButton] = useState(false);
 


  const handleAddMovie = (id) => {
    setLikeButton(!likeButton);
    var arrayMovies = movies.find((moviesArr) => moviesArr.id == id); // procura o produto pelo parametro id
  }
  

  useEffect(() => {

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
.then(response => response.json())
.then(data => {
  setMovies(data.results)
  console.log(data.results)
})
}, [])

  
  return (
    <>
      <Header/>

      {movies.map((movie) => {
          return (
            <Cards
              key={movie.id}
              title={movie.title}
              description={movie.overview}
              rating={movie.vote_average}
              image={`${imagePath}${movie.poster_path}`}
              addMovie={handleAddMovie}
            />
          );
        })} 

        <footer className={stylesApp.footer}>
          <p>Coded by Suzane Feitosa ♥</p>
        </footer>
      
    </>
  )
}

export default App
