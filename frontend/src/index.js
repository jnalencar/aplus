fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
        const moviesContainer = document.getElementById('movies-container');

        data.forEach(movie => {
            const movieElement = document.createElement('div');
            const titleElement = document.createElement('h1');
            const synopsisElement = document.createElement('p');

            // Set the text content
            titleElement.textContent = movie.title;
            synopsisElement.textContent = movie.synopsis;

            // Add a click event listener to the title
            titleElement.addEventListener('click', () => {
                window.location.href = movie.videoFile; // Redirect to the video file URL
            });

            // Append the title and synopsis to the movie element
            movieElement.appendChild(titleElement);
            movieElement.appendChild(synopsisElement);

            // Append the movie element to the movies container
            moviesContainer.appendChild(movieElement);
        });
    })
    .catch(error => console.error('Error:', error));

const sliderM = document.querySelector('.movie-gallery');
let isDownM = false;
let startXM;
let scrollLeftM;

sliderM.addEventListener('mousedown', eM => {
  isDownM = true;
  sliderM.classList.add('active');
  startXM = eM.pageX - sliderM.offsetLeft;
  scrollLeftM = sliderM.scrollLeft;
});
sliderM.addEventListener('mouseleave', _ => {
  isDownM = false;
  sliderM.classList.remove('active');
});
sliderM.addEventListener('mouseup', _ => {
  isDownM = false;
  sliderM.classList.remove('active');
});
sliderM.addEventListener('mousemove', eM => {
  if (!isDownM) return;
  eM.preventDefault();
  const x = eM.pageX - sliderM.offsetLeft;
  const SCROLL_SPEED = 1;
  const walk = (x - startXM) * SCROLL_SPEED;
  sliderM.scrollLeft = scrollLeftM - walk;
});

const sliderS = document.querySelector('.series-gallery');
let isDownS = false;
let startXS;
let scrollLeftS;

sliderS.addEventListener('mousedown', eS => {
  isDownS = true;
  sliderS.classList.add('active');
  startXS = eS.pageX - sliderS.offsetLeft;
  scrollLeftS = sliderS.scrollLeft;
});

sliderS.addEventListener('mouseleave', _ => {
  isDownS = false;
  sliderS.classList.remove('active');
});

sliderS.addEventListener('mouseup', _ => {
    isDownS = false;
    sliderS.classList.remove('active');
});

sliderS.addEventListener('mousemove', eS => {
    if (!isDownS) return;
    eS.preventDefault();
    const x = eS.pageX - sliderS.offsetLeft;
    const SCROLL_SPEED = 1;
    const walk = (x - startXS) * SCROLL_SPEED;
    sliderS.scrollLeft = scrollLeftS - walk;
});
