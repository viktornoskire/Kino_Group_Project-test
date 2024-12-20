async function loadMovies() {
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
}

async function loadHeadline() {
  const response = await fetch('data/moviesHeadline.json');
  if (!response.ok) {
    throw new Error(`HTTP-error! Status: ${response.status}`);
  }
  const data = await response.json();
  console.log('Headline data:', data);

  const headerElement = document.querySelector('.movie-headline');
  headerElement.textContent = data.HeadlineText;
}

loadHeadline();
loadMovies();
