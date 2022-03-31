'use strict';

const baseURL = 'https://api.themoviedb.org/3/movie/550?api_key=6c44463bf264a541103d4abb9dea5861'

fetch(baseURL)
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

// display movies and details
