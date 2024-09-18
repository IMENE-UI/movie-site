const movies = [
    {
        title: 'Inception',
        year: 2010,
        image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Inception',
    },
    {
        title: 'The Dark Knight',
        year: 2008,
        image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=The+Dark+Knight',
    },
    {
        title: 'Interstellar',
        year: 2014,
        image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Interstellar',
    },
    {
        title: 'The Matrix',
        year: 1999,
        image: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=The+Matrix',
    },
    {
        title: 'The Shawshank Redemption',
        year: 1994,
        image: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=The+Shawshank+Redemption',
    },
    {
        title: 'Pulp Fiction',
        year: 1994,
        image: 'https://via.placeholder.com/150/00FFFF/FFFFFF?text=Pulp+Fiction',
    },
];

const movieList = document.getElementById('movieList');
const searchInput = document.getElementById('searchInput');

function displayMovies(moviesToDisplay) {
    movieList.innerHTML = ''; // Clear previous results
    moviesToDisplay.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Year: ${movie.year}</p>
        `;
        movieList.appendChild(movieDiv);
    });
}

function filterMovies() {
    const query = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query)
    );
    displayMovies(filteredMovies);
}

// Initial display of movies
displayMovies(movies);

// Event listener for search input
searchInput.addEventListener('input', filterMovies);

