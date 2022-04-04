'use strict';

let url = 'https://dune-excited-mistake.glitch.me/movies';
let newMovie = {};

https://dune-excited-mistake.glitch.me/movies/add
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
                $('.movies').append(`<div class = 'card' id = '${data[x].id}'>
                                    <div class = 'card-body'>
                                    <h5>${data[x].title}</h5>
                                    <p class='card-text'>Plot: ${data[x].plot}</p>
                                    <p class='card-text'>Director: ${data[x].director}</p>
                                    <p class='card-text'>Year: ${data[x].year}</p>
                                    <p class="card-text">Genre: ${data[x].genre}</p>
                                    <p class='card-text'>Rating: ${data[x].rating}</p>
                                    <button type="button" class="delete-btn">Delete</button>
                                    <button type="button" class="edit-btn">Edit</button>
                                    <button type="button" class="add-btn">Add</button>
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
        method: 'DELETE'
    })
    .then(res => {res.json()})
    .then(data => (data)
    );
    console.log(data);
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

// Button Functionality


