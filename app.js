'use strict';

const baseURL = 'https://api.themoviedb.org/3/search/multi?';

fetch(baseURL+MOVIE_API_KEY)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    });

    let count = 0;
    let max = 2;
    let interval = 1000;
    const loadingPage = document.getElementById('loading-page');

    var intervalId = setInterval(function () {
        if (count >= max) {
            loadingPage.innerHTML = 'Movie App will display here';
        } else {
            count++;
        }
    }, interval);

const movieSearchInput = document.getElementById('movie-search-bar');
const searchList = document.getElementById('search-list');
const resultInfo = document.getElementById('result-info');

// load movies from API
async function loadMovies(searchMovie){
    // const URL = ``;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    console.log(data.Search);
    if (data.Response == "True") displayMovieResult(data.search);
}
function findMovies() {
    let searchTerm = (movieSearchInput.value).trim();
    if (searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
}

// display movies and details

