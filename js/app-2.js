'use strict';

let url = 'https://dune-excited-mistake.glitch.me/movies';
let newMovie = {};

// loadingPage()
// renderMovies()
//
// function renderMovies() {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => movieCard(data))
//         // console.log(res)
//         .catch(error => console.log(error))
// }

//create a movie card

renderMovies();


function renderMovies() {
    fetch(url)
        .then(res => res.json())
        .then(data => {

            for (let x = 0; x < data.length; x++) {
                $('.movies').append(getMovieCard(data[x]))
            }
        });
}

//language=HTML
function getMovieCard(movie) {
    return `<div class='card' id='${movie.id}' data-id="${movie.id}">
            <div class='card-body'>
                <h5>${movie.title}</h5>
                <p class='card-text'>Rating: ${movie.rating}</p>
                <p class="card-text">Genre: ${movie.genre}</p>
                <button type="button" class="delete-btn" onclick="deleteMovie(${movie.id})">Delete
                </button>
                <button type="button" class="edit-btn" onclick="editMovie()">Edit</button>
                <button type="button" class="add-btn" onclick="addMovieToList()">Add</button>
            </div>
        </div>`
}

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
function deleteMovie(movieId) {
    console.log(movieId);
    fetch(url + `/${movieId}`, {
        method: 'DELETE'
    })
        .then(res => {
            res.json()
        })
        .then(data => {
                (data)
                $(`.card[data-id=${movieId}]`).remove();
            }
        );
}

//change or edit a movie
function editMovie() {
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: '',
            rating: '',
            genre: '',
            plot: ''
        })

    })
        .then(res => res.json())
        .then(data => data)
}