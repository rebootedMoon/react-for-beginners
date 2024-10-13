import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./Home.module.css";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
    );
    const json = await response.json();

    setMovies(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.movie}>
              <Link to={`/character/${movie.id}`}>
                <span className={styles.movieTitle}>
                  {movie.name}
                </span>
              </Link>

              <Link to={`/character/${movie.id}`}>
                <img
                  src={`${movie.thumbnail.path}.${movie.thumbnail.extension}`}
                  alt="Movie Thumbnail"
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
