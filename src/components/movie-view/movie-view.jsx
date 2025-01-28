import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div className="movie-view">
      <button onClick={onBackClick}>Back</button>
      <h2>{movie.Title}</h2>
      <p>{movie.Description}</p>
      <p>
        <strong>Director:</strong> {movie.Director.Name}
      </p>
      <img src={movie.ImagePath} alt={movie.Title} style={{ width: "300px" }} />
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }).isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
