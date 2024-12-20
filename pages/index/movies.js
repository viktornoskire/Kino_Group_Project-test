async function loadMovies() {
  try {
    const response = await fetch('data/movies.json');
    if (!response.ok) {
      throw new Error(`HTTP-error! Status: ${response.status}`);
    }
    const movies = await response.json();
    console.log('Filmer:', movies);

    const movieContainer = document.querySelector('.movie-container');
    movies.forEach((movie) => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.textContent = movie.Titel;
      movieContainer.appendChild(movieCard);
    });
  } catch (error) {
    console.error('Unable to load movies:', error);
  }
}

async function loadHeadline() {
  try {
    const response = await fetch('data/moviesHeadline.json');
    if (!response.ok) {
      throw new Error(`HTTP-error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Headline data:', data);

    const headerElement = document.querySelector('.movie-headline');
    if (!headerElement) {
      console.error('Elementet med klassen "main-h1" hittades inte i HTML.');
      return;
    }

    headerElement.textContent = data.HeadlineText;
    console.log('Rubrik uppdaterad med:', data.HeadlineText);
  } catch (error) {
    console.error('Unable to load headline:', error);
  }
}

loadHeadline();
loadMovies();
