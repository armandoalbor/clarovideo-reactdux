import { SET_MOVIE_LIST_DATA } from '../actions';

export const movies = (state = {}, action) => {
    switch (action.type){
        case SET_MOVIE_LIST_DATA: {
            return action.payload;
        }
        default:
            return state;
    }
};

/*
export const getForecastDataFromCities = createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);

const fromObjectToArray = movies => ( toPairs(movies).map( ([key, value]) => ({key, name: key, data: value.weather })) );
export const getWeatherCities = createSelector(state => fromObjectToArray(state), movies => movies );
*/