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
prevBtn.addEventListener('click', function() {
    offset = Math.max(0, offset - 25); 
    fetchGifs(query);
});

nextBtn.addEventListener('click', function() {
    offset += 25;
    fetchGifs(query);
});
document.getElementById('home-tab').addEventListener('click', function() {
    
    gifContainer.innerHTML = '';
    searchBar.value = '';
    query = '';
    offset = 0;
    prevBtn.disabled = true;
    nextBtn.disabled = true;
});
async function fetchGifs(query) {
    loading.style.display = 'block'; 
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=W6M1RJw2FHpwR7no6uDIDH59ADEHFA7L&q=${query}&limit=25&offset=${offset}&rating=g&lang=en`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displayGifs(data.data);
        prevBtn.disabled = offset === 0;
        nextBtn.disabled = data.data.length < 25;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        errorMessage.textContent = 'There was an error fetching the gifs. Please try again later.';
    } finally {
        loading.style.display = 'none';
    }
}
