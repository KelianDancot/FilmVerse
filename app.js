
const API_KEY = '?api_key=f447ea150f76b57989d83f371eb03942';
const BASE_URL = 'https://api.themoviedb.org/3';
// URL Du Moment
const API_URL_MOMENT = BASE_URL + '/movie/now_playing' + API_KEY;
// URL Populaire
const API_URL_POPULAIRE = BASE_URL + '/movie/popular' + API_KEY;
// URL A Venir
const API_URL_AVENIR = BASE_URL + '/movie/upcoming' + API_KEY;
// URL Les Mieux Notés
const API_URL_BESTNOTE = BASE_URL + '/movie/top_rated' + API_KEY;
// URL Recherche
const searchURL = BASE_URL + '/search/movie' + API_KEY;

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL_MOMENT);

function getMovies(url) {
    fetch(url).then(res => res.json()).then (data => {
        console.log(data.results);
        showMovies(data.results)
    })
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, id} = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = 
        `
            <img src="${IMG_URL+poster_path}" alt="${title}">
            
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">

                <h3>Overview</h3>
                ${overview}
                <br/> 
                <button class="know-more" id="${id}">Know More</button
            </div>
        `

        main.appendChild(movieElement);
    })
}

function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.ariaValueMax;

    if(searchTerm){
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL_MOMENT)
    }
})