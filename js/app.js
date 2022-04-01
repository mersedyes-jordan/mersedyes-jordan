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
    }
}, interval);

fetch('https://api.themoviedb.org/3/discover/movie?' + MOVIE_API_KEY)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    });

//search bar functionality
// let userInput = document.getElementById("movie-search-bar");
// userInput.addEventListener('submit', searchMovie);
// let searchResults = [];

    $('#submit').click((e) => {
        let searchText = $('#movie-search-bar').val();
        searchMovie(searchText);
        e.preventDefault();
    });

//search results
function searchMovie(searchText) {
    fetch('https://api.themoviedb.org/3/search/movie?' + MOVIE_API_KEY + `&query=${searchText}` + '&language=en-US' + '&include_adult=false')
        .then(response => response.json())
        .then((response) => {
            console.log(response);

            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
                <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.title}</h5>
              <a onclick="movieSelected('${movie.id}')" class="submit" href="#">Movie Details</a>
            </div>
          </div>
        `;
            });
            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
})

function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    window.location = 'index.html';
    return false;
}

function getMovie() {
    let movieId = sessionStorage.getItem('movieId');

    fetch('https://api.themoviedb.org/3/search/movie?' + MOVIE_API_KEY + `&query=${result}` + '&language=en-US' + '&include_adult=false')
        .then((response) => {
            console.log(response);
            let movie = response.data;

            let output = `
                <div class="row">
                    <div class="col-md-4">
                        <img src="${results.backdrop_path}" class="thumbnail">
                      </div>
                      <div class="col-md-8">
                        <h2>${results.title}</h2>
                        <ul class="list-group">
                          <li class="list-group-item"><strong>Summary:</strong> ${results.overview}</li>
                          <li class="list-group-item"><strong>Genre:</strong> ${results.genre_ids}</li>
                          <li class="list-group-item"><strong>Popularity:</strong> ${results.popularity}</li>
                          <li class="list-group-item"><strong>Rating:</strong> ${results.vote_average}</li>
                        </ul>
                      </div>
                    </div>
                    <div class="row">
                      <div class="well">
                        <h3>Plot</h3>
                        ${movie.overview}
                        <hr>
                        <a href="https://api.themoviedb.org/3/search/movie?" target="_blank" class="btn btn-primary">View The Movie DB</a>
                        <a href="../index.html" class="btn btn-default">Go Back To Search</a>
                      </div>
                    </div>
            `;

            $('#movie').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}


// function searchMovie(e) {
//
//     let html = " ";
//     let result = userInput.value;
//     let tbody = document.querySelector('#result-info');
//     console.log(result);
//
//     fetch('https://api.themoviedb.org/3/search/movie?' + MOVIE_API_KEY + `&query=${result}` + '&language=en-US' + '&include_adult=false')
//         .then(res => res.json())
//         .then( data => {
//
//             console.log(data);
//
//             for (let i = 0; i < data.results.length; i++) {
//
//                 searchResults.push(data.results[i].title);
//                 tbody.innerHTML = searchResults;
//             }
//         });
 }

