import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { movie } from './movie';
import { movies } from './movies';
import { menu } from './menu';
import { filter } from './filter';
import { filteredMovies } from './filteredMovies';

export default combineReducers({
    menu,
    movie,
    movies,
    filter,
    filteredMovies
});

export const getMenu = createSelector(state => state.menu, menu => menu);
export const getMovie = createSelector(state => state.movie, movie => movie);
export const getListMovies = createSelector(state => state.movies,  movies => movies);
export const getFilter = createSelector(state => state.filter, filter => filter);
export const getListFilteredMovies = createSelector(state => state.filteredMovies,  filteredMovies => filteredMovies);