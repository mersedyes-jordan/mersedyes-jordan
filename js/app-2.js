'use strict';

let url = 'https://dune-excited-mistake.glitch.me/movies';
let newMovie = {};
$(document).on('click', '.edit-btn', editMovie)

$(window).on('load', function () {
    $('#loading-page').hide();
});

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

//create a movie card
//language=HTML
function getMovieCard(movie) {
    return `<div class='card' id='${movie.id}' data-id="${movie.id}">
            <div class='card-body'>
                <h5>${movie.title}</h5>
                <input class='card-text rating' value="Rating: ${movie.rating}" readonly>
                <input class="card-text genre" value="Genre: ${movie.genre}" readonly>
                <br>
                <button type="button" class="edit-btn" data-id="${movie.id}">Edit</button>
                <button type="button" class="delete-btn" onclick="deleteMovie(${movie.id})">Delete</button>
            </div>
        </div>`
}

//add a movie
function addMovieToList(newMovie) {
    const addMovie = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMovie),
    };
    fetch(url, addMovie)
        .then(res => console.log(res))
        .catch(error => console.log('You shall not pass'));
}
//add movie button
$('.addMovieBtn').click(function (event){
    event.preventDefault();
    let movieTitle = $('#add-movie-name').val();
    let movieGenre = $('#add-movie-genre').val();
    let movieRating = $('#add-movie-rating').val();
    let movieInfo = {
        title: movieTitle,
        genre: movieGenre,
        rating: movieRating
    }
    addMovieToList(movieInfo);
});


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

const addMenu = document.querySelector('.add-menu');
const addFields = document.querySelector('#addMovieForm')

addMenu.addEventListener('click', () => {
    addFields.classList.toggle('active');
});