import { SET_MOVIE } from '../actions';

export const movie = (state = {}, action) => {
    switch (action.type){
        case SET_MOVIE:
            return action.payload ;
        default:
            return state;
    }
};