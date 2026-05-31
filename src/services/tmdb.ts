const API_KEY = "91fdcb32f62e79fd3496ced5c482c122";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`
  );

  const data = await res.json();
  return data.results;
};