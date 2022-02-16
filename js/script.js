"user strict";

const numberOfFilms = +prompt("Скільки вільмів ви переглянули", "");

const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilmMovie = prompt("Останній фільм який ви переглядали", ""),
      reviewFilmMovie = +prompt("Оцініть фільм");

personalMovieBD.movies[lastFilmMovie] = reviewFilmMovie;

console.log(personalMovieBD);