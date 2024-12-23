async function loadMovies() {
  const response = await fetch('data/movies.json');
  if (!response.ok) {
    throw new Error(`HTTP-error! Status: ${response.status}`);
  }
  const movies = await response.json();

  const movieContainer = document.querySelector('.movie-container');
  movies.forEach((movie) => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieContainer.appendChild(movieCard);

    const movieImg = document.createElement('img');
    movieImg.src = movie.Bild;
    movieImg.alt = `Bild för ${movie.Titel}`;
    movieCard.appendChild(movieImg);

    const movieTitle = document.createElement('h2');
    movieTitle.textContent = movie.Titel;
    movieCard.appendChild(movieTitle);

    const movieGenre = document.createElement('p');
    movieGenre.textContent = movie.Genre;
    movieCard.appendChild(movieGenre);

    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie-info');
    movieInfo.innerHTML = `
    <p><strong>Titel:</strong> ${movie.Titel}</p>
    <p><strong>Genre:</strong> ${movie.Genre}</p>
    <p><strong>Handling:</strong> ${movie.Beskrivning}</p>
    <p><strong>Skådespelare:</strong> ${movie.Skådespelare}</p>
    <p><strong>Språk:</strong> ${movie.Språk}</p>
    <p><strong>Rating:</strong> ${movie.Rating}</p>
    <p><strong>Speltid:</strong> ${movie.Längd}</p>
    <p><strong>Rek. ålder:</strong> ${movie.RekommenderadAlder}</p>
    <p><strong>Status:</strong> ${movie.Label}</p>`;

    movieInfo.style.display = 'none';
    movieCard.appendChild(movieInfo);

    movieTitle.addEventListener('click', () => {
      if (movieInfo.style.display === 'none') {
        movieInfo.style.display = 'block';
      } else {
        movieInfo.style.display = 'none';
      }
    });
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
