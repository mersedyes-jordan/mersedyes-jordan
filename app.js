'use strict';

let count = 0;
let max = 1;
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

    let html = " ";
    let result = userInput.value;
    let tbody = document.querySelector('#result-info');
    console.log(result);

    fetch('https://api.themoviedb.org/3/search/movie?' + MOVIE_API_KEY + `&query=${result}` + '&language=en-US' + '&include_adult=false')
        .then(res => res.json())
        .then( data => {

            console.log(data);

            for (let i = 0; i < data.results.length; i++) {

                searchResults.push(data.results[i].title);
                tbody.innerHTML = searchResults;
            }
        });
}

