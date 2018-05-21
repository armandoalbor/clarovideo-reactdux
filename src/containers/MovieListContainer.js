import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import { setMovieSectionListData, setSelectedMovie } from '../actions';
import { getListMovies, getListFilteredMovies } from '../reducers';
import { getMovie } from '../reducers';
import MovieList from "../components/MovieList";

class MovieListContainer extends Component {
    componentDidMount() {
        const { setMovieListData, setSelectedMovie, movie } = this.props;
        setMovieListData();
        setSelectedMovie(movie);
    }

    handleSelectedMovie = movie => {
        this.props.setSelectedMovie(movie);
    };

    render() {
        const movies = this.props.filteredMovies;

        return (
                movies.length > 0 ?
                    <MovieList movies={movies}
                               onSelectedMovie={this.handleSelectedMovie} />  :
                <h2 className={'no-data'}>No se han obtenido resultados para tu busqueda . . . </h2>
        );
    }
}

MovieListContainer.propTypes = {
    setMovieListData: PropTypes.func.isRequired,
    setSelectedMovie: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
    setMovieListData: () => dispatch(setMovieSectionListData()),
    setSelectedMovie: movie => dispatch(setSelectedMovie(movie))
});

const mapStateToProps = state => ({
    movies: getListMovies(state),
    filteredMovies: getListFilteredMovies(state),
    movie: getMovie(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
