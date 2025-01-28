import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
  console.log(movie);
  return (
    <div
      className="movie-card"
      onClick={() => onMovieClick(movie)}
      style={{
        cursor: "pointer",
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{movie.title}</h3>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
