 const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];

const satrtAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');

const cancelAddMovieButton = document.querySelector('.btn--passive');
const confirmAddMovieButton = document.querySelector('.btn--success');

const userInputs = addMovieModal.querySelectorAll('input');
const entryText = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('dlelete-modal');
    
const Movies = [];

const updateUI = () => {
    if (Movies.length === 0) {
        entryText.style.display = 'block';
    } else {
        entryText.style.display = 'none';
    }
};

const toggelBackDrop = () => {
    backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggelBackDrop();
};

const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggelBackDrop();
    //deleteMovie();
};

const backDropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletion();
};

const closeMovieDeletion = () => {
    toggelBackDrop();
    deleteMovieModal.classList.remove('visible');

};


const cancelAddMovieHandler = () => {
    closeMovieModal();
    clearMovieInput();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || ratingValue < 1 || ratingValue > 5) {
        alert('Please enetr valid values (rating between 1 to 5.)');
        return;
    }

    const newMovie = {
        Id : Math.random().toString(),
        Title : titleValue,
        ImageUrl : imageUrlValue,
        Rating : ratingValue
    };

    Movies.push(newMovie);
    console.log(Movies);
    closeMovieModal();
    clearMovieInput();
    renderNewMovieElement(newMovie.Id,newMovie.Title, newMovie.ImageUrl, newMovie.Rating);
    updateUI();
};

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for (const movie of Movies) {
        if(movie.Id === movieId){
            break;
        }
        movieIndex++;
    }
    Movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    //listRoot.removeChild(listRoot.children[movieIndex]);

};




const renderNewMovieElement = (id, title, imageurl, rating) => {
    const newMovieElemennt = document.createElement('li');
    newMovieElemennt.className = 'movie-element';
    newMovieElemennt.innerHTML = `
    <div class="movie-element__image">
     <img  src="${imageurl}" alt ="${title}">
    </div>
    <div class="movie-element__info">
     <h2>${title}</h2>
     <p>${rating}/5 stars </p>
    </div>`;

    newMovieElemennt.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElemennt);
};

const clearMovieInput = () => {
    // userInputs[0].value = '';
    // userInputs[1].value = '';
    // userInputs[2].value = '';

    for (const userinput of userInputs) {
        userinput.value = '';
    }
};

satrtAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backDropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);


// console.log(addMovieModal);
 