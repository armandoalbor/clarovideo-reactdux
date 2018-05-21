import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { MENU } from '../constants';

const initialState = { menu: MENU, movies:[], filteredMovies:[], filter: '' };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//export const store = createStore(reducers, initialState, applyMiddleware(thunk));
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
