'use strict';

let url = 'https://dune-excited-mistake.glitch.me/movies';
let newMovie = {};
$(document).on('click', '.edit-btn', editMovie)

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
                <input class='card-text rating' value="Rating: ${movie.rating}" readonly>
                <input class="card-text genre" value="Genre: ${movie.genre}" readonly>
                <button type="button" class="delete-btn" onclick="deleteMovie(${movie.id})">Delete
                </button>
                <button type="button" class="edit-btn" data-id="${movie.id}">Edit</button>
                <button type="button" class="add-btn" onclick="addMovieToList()">Add</button>
            </div>
        </div>`
}

//add a movie
function addMovieToList() {
    const addMovie = {
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
    $(document).off('click', '.edit-btn', editMovie)
    let movieId = $(this).attr('data-id');
    let movieCard = $(`.card[data-id=${movieId}]`);
    let editButton = movieCard.find(`.edit-btn`)
    movieCard.find(`input`).attr('readonly', false)
    editButton.text('Save')
    $(document).on('click', '.edit-btn', saveMovie)
}

function saveMovie() {
    $(document).off('click', '.edit-btn', saveMovie)
    console.log($(this))
    let movieId = $(this).attr('data-id');
    let movieCard = $(`.card[data-id=${movieId}]`);
    let editButton = movieCard.find(`.edit-btn`)
    movieCard.find(`input`).attr('readonly', true)
    editButton.text('Edit')
    $(document).on('click', '.edit-btn', editMovie)

    fetch(url + `/${movieId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            rating: movieCard.find('.rating').val(),
            genre: movieCard.find('.genre').val(),
        })})
        .then(res => res.json())
        .then(data => data)
}