'use strict';

let url = 'https://api.themoviedb.org/3/discover/movie?' + MOVIE_API_KEY;

fetch(url).then(res => res.json())
.then(res => {
    console.log(res)
});

