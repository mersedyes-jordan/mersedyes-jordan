'use strict';

let url = 'https://dune-excited-mistake.glitch.me/movies';
let newMovie = {};

// loadingPage()
renderMovies()

function renderMovies() {
    fetch(url)
        .then(res => res.json())
        .then(data => movieCard(data))
            // console.log(res)
        .catch(error => console.log(error))
}

//create a movie card

//add a movie
function addMovieToList() {
    const addMovie = {
        newMovie,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMovie),
    };
    fetch(url, addMovie)
        .then(res => console.log(res))
        .then(data => movieCard(data))
        .catch(error => console.log('You shall not pass'));
}
//delete a movie

//change or edit a movie


