
const nuberOfFilms = +prompt("Сколько фильмов уже посмотрели", '');
console.log(nuberOfFilms);
const personalMovieDB = {
    count: nuberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat : false,
};
const a = prompt("Один из последних просмотренных фильмов", '');
const b = prompt("На сколько оцените его", '');
const c = prompt("Один из последних просмотренных фильмов", '');
const d = prompt("На сколько оцените его", '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);