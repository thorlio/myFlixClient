import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
  console.log(movie); // Log to check the structure of the movie object
  return (
    <div className="movie-view">
      <button onClick={onBackClick}>Back</button>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>
        <strong>Director:</strong> {movie.director || "Unknown"}
      </p>
      {movie.imagePath && (
        <img
          src={movie.imagePath}
          alt={movie.title}
          style={{ width: "300px" }}
        />
      )}
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired, // Updated to match the API response
    imagePath: PropTypes.string,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
