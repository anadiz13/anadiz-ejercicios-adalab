"use strict";
function workWithMovies() {
  let movies = [`Laura`, `Pedro`, `Marta`];

  movies[3] = `Hola`;
  console.log(movies);
  movies[3] = `guapa`;
  console.log(movies);
}
workWithMovies();
