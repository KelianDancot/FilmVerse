fetch('config.json')
  .then(response => response.json())
  .then(configData => {
    // Accéder aux variables du fichier JSON
    const API_KEY = configData.apiKey;
    const BASE_URL = configData.baseUrl;

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
    // URL Find Réalisateur
    const realURL = BASE_URL + '/movie/'; 
    // Fin URL Réalisateur
    const frealURL = '/credits' + API_KEY

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

    async function getReal(id) {
        const response = await fetch(realURL + id + frealURL);
        const jsonData = await response.json();
        const filteredCrew = jsonData.crew.filter(({ job }) => job === "Director");
        const directorList = [];
        for (const { name } of filteredCrew) {
            directorList.push(name);
        }
        return directorList.join(", ");
    }

    function truncateText(text, limit) {
        const words = text.trim().split(' ');
        const truncated = words.slice(0, limit).join(' ');
        if (words.length > limit) {
            return truncated + '...';
        }
        return truncated;
    }

    async function showMovies(data) {
        main.innerHTML = '';

        for (const movie of data) {
            const { title, poster_path, vote_average, release_date, overview, id } = movie;
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            
            const directorName = await getReal(id);
            const truncatedOverview = truncateText(overview, 70); 
            
            movieElement.innerHTML = `
                <img src="${IMG_URL+poster_path}" alt="${title}">
                
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getColor(vote_average)}">${vote_average}</span>
                </div>

                <div class="overview">

                    <h3>Synopsis</h3>
                    <p>${truncatedOverview}</p>
                    <h3>Director</h3>
                    <p>${directorName}</p>
                    <h3>Release Date</h3>
                    <p>${release_date}</p>
                    <br/>
                </div>
            `;

            main.appendChild(movieElement);
        }
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

        const searchTerm = search.value;

        if(searchTerm){
            getMovies(searchURL+'&query='+searchTerm)
        }else{
            getMovies(API_URL_MOMENT)
        }
    })

    })

    .catch(error => {
        console.error('Erreur lors du chargement du fichier JSON :', error);
    });
