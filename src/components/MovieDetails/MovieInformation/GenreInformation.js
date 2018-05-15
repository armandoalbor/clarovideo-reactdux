import React from 'react';
import PropTypes from 'prop-types';

const GenreInformation = ({ genres }) => {

    const strToComponent = genres => {
        return genres.map((genre) => (genre + ', '));
    };

    return (
        <p className={'genre-details'}>
            <strong>Género:</strong> { strToComponent(genres) }
        </p>
    );
};

GenreInformation.propTypes = {
    genres: PropTypes.array.isRequired
};

export default GenreInformation;