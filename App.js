const API_KEY = `0c32628f5c298dcb9816eefc0298de13`;
const image_url = "https://image.tmdb.org/t/p/original";
const BaseUrl = "https://api.themoviedb.org/3";
const requests = {
  originals: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
};
fetch(requests.originals)
  .then((res) => res.json())
  .then((data) => {
    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];
    const movieTitle = document.getElementById("movieTitle");
    const movieInfo = document.getElementsByClassName("movie-info");
    const movieBanner = document.getElementsByClassName("banner");
    movieBanner[0].style.backgroundImage = `url(${image_url}${setMovie.backdrop_path})`;
    console.log(setMovie);
    movieInfo[0].innerText = setMovie.overview;
    movieTitle.innerText = setMovie.title;
  });
const fetchMoviesByGenre = (genre, url) => {
  fetch(`${url}${API_KEY}&with_genres=${genre}`)
    .then((res) => res.json())
    .then((data) => {
      const setMovies = data.results;
      const movieDiv = document.getElementsByClassName("movie");
      for (let i = 0; i < setMovies.length; i++) {
        const poster = setMovies[i];
        const img = document.createElement("img");
        img.src = `${image_url}${poster.poster_path}`;
        movieDiv[i].appendChild(img);
      }
    });
};
fetchMoviesByGenre(27, "https://api.themoviedb.org/3/discover/movie?api_key=");
fetchMoviesByGenre(28, "https://api.themoviedb.org/3/discover/movie?api_key=");
fetchMoviesByGenre(
  10749,
  "https://api.themoviedb.org/3/discover/movie?api_key="
);
fetchMoviesByGenre(99, "https://api.themoviedb.org/3/discover/movie?api_key=");
fetchMoviesByGenre(35, "https://api.themoviedb.org/3/discover/movie?api_key=");
fetchMoviesByGenre(213, "https://api.themoviedb.org/3/discover/tv?api_key=");
fetch(
  "https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US"
)
  .then((res) => res.json())
  .then((data) => {
    const setMovies = data.results;
    const movieDiv = document.getElementsByClassName("movie");
    for (let i = 0; i < setMovies.length; i++) {
      const poster = setMovies[i];
      const img = document.createElement("img");
      img.src = `${image_url}${poster.poster_path}`;
      movieDiv[i].appendChild(img);
    }
  });
