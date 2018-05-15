import { SET_FILTER_DATA } from '../actions';

export const filter = (state = {}, action) => {
    switch (action.type){
        case SET_FILTER_DATA: {
            return action.payload
        }
        default:
            return state;
    }
};
