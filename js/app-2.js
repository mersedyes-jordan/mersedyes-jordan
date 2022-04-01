'use strict';

let url = 'https://codeup-json-server.glitch.me/movies';

fetch(url).then(res => res.json())
.then(res => {
    console.log(res)
});

