import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

import './styles.css';

const MovieList = ({ movies, onSelectedMovie }) => {

    const handleMovieClick = movie => {
        console.log("handleWeatherLocationClick");
        onSelectedMovie(movie);
    };

    const strToComponent = movies => (
        movies.map(movie => (
            <MovieItem key={movie.id} title={movie.title} id={movie.id} image={movie.image_list}
                       onMovieClick={() => handleMovieClick(movie.id)}
                />
            )
        )
    );

    return (
            <div className={'movie-list'}>
                { strToComponent(movies) }
            </div>
    );
};

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    onSelectedMovie: PropTypes.func
};

export default MovieList;