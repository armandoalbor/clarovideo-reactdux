import React from 'react';
import PropTypes from 'prop-types';
import './MovieItem.css';
import FaPlay from 'react-icons/lib/fa/play-circle-o';

const MovieItem = ({ onMovieClick, title, id, image }) => (
        <div className={'movie-item'} onClick={onMovieClick} >
            <div className="preview"><span> <FaPlay className={'icon'} /> </span></div>
            <img src={image} alt={id} />
        </div>
);

MovieItem.propTypes = {
    title: PropTypes.string.isRequired,
    onMovieClick: PropTypes.func
};

export default MovieItem;
