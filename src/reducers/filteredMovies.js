import { SET_MOVIE_FILTERED_LIST_DATA } from '../actions';

export const filteredMovies = (state = {}, action) => {
    switch (action.type){
        case SET_MOVIE_FILTERED_LIST_DATA: {
            return action.payload
        }
        default:
            return state;
    }
};
