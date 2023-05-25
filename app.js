
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

testMovies(API_URL_MOMENT);

function testMovies(url) {
    fetch(url).then(res => res.json()).then (data => {
        console.log(data);
    })
}