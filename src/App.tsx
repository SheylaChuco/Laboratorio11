import { useEffect, useState } from "react";
import { getPopularMovies } from "./services/tmdb";

function App() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data);
    };

    loadMovies();
  }, []);

  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", padding: "20px" }}>
      {/* TÍTULO */}
      <h1
        style={{
          color: "#38bdf8",
          fontSize: "48px",
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        CineSpoilerS 🎬
      </h1>

      {/* GRID DE PELÍCULAS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "20px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              background: "#1e293b",
              borderRadius: "12px",
              padding: "10px",
              color: "white",
              textAlign: "center",
            }}
          >
            {/* IMAGEN */}
            <img
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />

            {/* TÍTULO */}
            <h3 style={{ fontSize: "14px", marginTop: "10px" }}>
              {movie.title}
            </h3>

            {/* RATING */}
            <p style={{ color: "#38bdf8" }}>
              ⭐ {movie.vote_average}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;