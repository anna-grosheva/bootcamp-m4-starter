export function findMovies(movies) {
    return {
        type: 'FIND_MOVIES',
        payload: {
            movies: movies
        }
    }
}
export function fetchMovieQuery(searchLine) {
    return function (dispatch) {
        let searchQuery = encodeURIComponent(searchLine);
        fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=bfa19603`)
        .then(res => res.json())
        .then(data => {
            dispatch(findMovies(data.Search));
        })
    }
}
export function addMovieToFavorites(imdbID) {
    return {
        type: 'ADD_MOVIE_TO_FAVORITES',
        payload: {
            imdbID: imdbID
        }
    }
}
export function removeMovieFromFavorites(imdbID) {
    return {
        type: 'REMOVE_MOVIE_FROM_FAVORITES',
        payload: {
            imdbID: imdbID
        }
    }
}