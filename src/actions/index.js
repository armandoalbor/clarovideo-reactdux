import { transformMovieListData, transformMovieData } from '../services/transformMovieListData';
import { URL, MENU } from '../constants';

export const SET_MOVIE = 'SET_MOVIE';
export const SET_MENU = 'SET_MENU';
export const SET_MOVIE_LIST_DATA = 'SET_MOVIE_LIST_DATA';
export const SET_MOVIE_FILTERED_LIST_DATA = 'SET_MOVIE_FILTERED_LIST_DATA ';
export const SET_FILTER_DATA = 'SET_FILTER_DATA ';

const setMenu = payload => ({ type: SET_MENU, payload });
const setMovie = payload => ({ type: SET_MOVIE, payload });
const setMovieListData = payload => ({ type: SET_MOVIE_LIST_DATA, payload });
const setMovieFilteredListData = payload => ({ type: SET_MOVIE_FILTERED_LIST_DATA , payload });
const setFilterData = payload => ({ type: SET_FILTER_DATA, payload });


export const setMenuData = () => {
    return dispatch => {
        dispatch(setMenu(MENU));
    }
};

export const setFilter = payload => {
    return dispatch => {
        dispatch(setFilterData(payload));
    }
};

export const setMovieFilteredData = payload => {
    return (dispatch, getSate) => {
        const state = getSate();
        const { movies } = state;

        dispatch(setMovie({}));

        if(payload === '') {
            return dispatch(setMovieFilteredListData(movies));
        }
        else {

            const searchTerm = payload.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");
            //const moviesMatched = movies.filter(movie => movie.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(searchMovie));

            const moviesMatched = movies.filter(movie => {
                //let filterMovie = movie.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(searchTerm);
                let filterMovie = '';

                if(!filterMovie) {
                    return movie.rating_code.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(searchTerm);
                }

                return filterMovie;
            });


            dispatch(setMovieFilteredListData(moviesMatched));
        }
    }
};

export const setMovieSectionListData = () => {
    return dispatch => {
        fetch(URL).then( data => {
            return data.json();
        }).then( movie_list_data => {
            const movies = transformMovieListData(movie_list_data);
            dispatch(setMovieListData(movies));
            dispatch(setMovieFilteredListData(movies));
        });
    };
};

export const setSelectedMovie = payload => {
    return dispatch => {
        if (payload.length) {
            console.log("payload = " + JSON.stringify(payload));
            const url_preview = `https://mfwkweb-api.clarovideo.net/services/content/data?api_version=v5.82&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=tmlb19rgv9fnlkdceu94libhl0&group_id=${payload}&user_hash=MjkxMzIwNDN8MTUyNjMxMTQ3M3w4NWRmNTlmMGU0MDRiYjYyOTc0MTQ5OTFkMTM1OGFkYTY1Yjc0YzJjMTM5YzZkZTdjMA%3D%3D`;
            return fetch(url_preview).then(
                data => data.json()
            ).then(movie_data => {
                const movie = transformMovieData(movie_data.response.group);
                dispatch(setMovie( movie ));
            });
        }
    };
};



