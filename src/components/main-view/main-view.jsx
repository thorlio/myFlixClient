import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://flixandchill-0e85c940608d.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log("Movies data:", data); // Debugging step
        setMovies(data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      <h1>Welcome to MyFlix!</h1>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie} // Pass the movie object as a prop
          onMovieClick={() => setSelectedMovie(movie)} // Pass the click handler
        />
      ))}
    </div>
  );
};
