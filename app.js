'use strict';

let count = 0;
let max = 2;
let interval = 1000;
const loadingPage = document.getElementById('loading-page');
var intervalId = setInterval(function () {
    if (count >= max) {
        loadingPage.innerHTML = 'This is where the movies will be';
    } else {
        count++;
    }}, interval);

fetch('https://api.themoviedb.org/3/discover/movie?' + MOVIE_API_KEY)
    .then(res => res.json())
    .then( data => {
        console.log(data)
    });

let userInput = document.getElementById("movie-search-bar");
userInput.addEventListener('keyup', searchMovie);
let searchResults = [];

function searchMovie(e) {

    let result = userInput.value;
    console.log(result);

    fetch('https://api.themoviedb.org/3/search/movie?' + MOVIE_API_KEY + `&query=${result}` + '&language=en-US' + '&include_adult=false')
        .then(res => res.json())
        .then( data => {
            searchResults = data;
            console.log(searchResults);
        });
}


