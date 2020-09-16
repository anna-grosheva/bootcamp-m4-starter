const initialState = {
    movies: [],
    favorites: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'FIND_MOVIES':
            return {
                ...state,
                movies: action.payload.movies
            }
        case 'ADD_MOVIE_TO_FAVORITES':
            const newState = { ...state };
            const chosenMovie = newState.movies.find((item) => {
                return item.imdbID === action.payload.imdbID;
            });
            if (chosenMovie) {
                newState.favorites = [...newState.favorites, {...chosenMovie}];
            }
            return newState;
        
        case 'REMOVE_MOVIE_FROM_FAVORITES':
            const newStateInFavorites = { ...state };
            const updatedFavorites = newStateInFavorites.favorites.filter((item) => 
                item.imdbID !== action.payload.imdbID
            );
            if (updatedFavorites) {
                newStateInFavorites.favorites = updatedFavorites;
            }
            return newStateInFavorites;
        default:
            return state;
    }
}

export default reducer;