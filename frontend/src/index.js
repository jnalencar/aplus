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