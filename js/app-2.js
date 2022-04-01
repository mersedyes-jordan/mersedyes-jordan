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

movieCard();

function movieCard() {
    fetch(url)
        .then(res => res.json())
        .then(data => {

            for (let x = 0; x < data.length; x++) {
                $('.movies').append(`<div class = 'card m-2 text-center card-width' id = '${data[x].id}'>
                                    <div class = 'card-body text-wrap'>
                                    <h5>${data[x].title}</h5>
                                    <p class='card-text p-0 m-0'>Rating: ${data[x].rating}</p>
                                    <p class="card-text p-0 m-0">Genre: ${data[x].genre}</p>
                                    <button type="button" class="delete-btn btn btn-danger">Delete</button>
                                    <button type="button" class="delete-btn btn btn-danger">Edit</button>
                                    <button type="button" class="delete-btn btn btn-danger">Add</button>
                                    </div>
                                    </div>`)

            }
        });
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
function deleteMovie(){
    fetch(url, {
        method: 'DELETE'}
    })
    .then(res => {res.json()})
    .then(data => (data)
    );
}
//change or edit a movie
function editMovie() {
    fetch(url, {
        method: 'PUT',
        headers: {'Content-Type': application/json,
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

