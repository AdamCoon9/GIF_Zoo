let offset = 0;
let query = '';

const searchBar = document.getElementById('search-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const gifContainer = document.getElementById('gif-container');
searchBar.addEventListener('keyup', function(e) {});


document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    query = searchBar.value;
    offset = 0; 
    fetchGifs(query);
});

searchBar.addEventListener('keyup', function(e) {
    if (e.key === 'Enter' && searchBar.value.trim() !== '') {
        query = searchBar.value;
        offset = 0; 
        fetchGifs(query);
    }
});
