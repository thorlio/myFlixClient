export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch("https://flixandchill-0e85c940608d.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((movies) => setMovies(movies))
      .catch((err) => console.error("Error fetching movies:", err));
  }, [token]);

  if (!user) {
    return (
      <div>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
          }}
        />
        <p>or</p>
        <SignupView />
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <h1>Welcome, {user.Username}!</h1>
        <button
          onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
        >
          Logout
        </button>
      </div>

      {movies.length === 0 ? (
        <p>No movies available!</p>
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};
