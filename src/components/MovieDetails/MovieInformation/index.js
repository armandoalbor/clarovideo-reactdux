import React from 'react';
import PropTypes from 'prop-types';
import './MovieInformation.css';
import FaMail from 'react-icons/lib/fa/envelope';
import FaFacebook from 'react-icons/lib/fa/facebook';


import  GenreInformation from './GenreInformation';
import  PersonInformation from './PersonInformation'

const MovieInformation = ({ title, title_year, duration_text, rating, large_description, image_details, image_background, genres, actors, directors, writers, producers }) => {
    return (
        <div className={'main-container-movie'}>
            <div className={'movie-detail'}>

                <div className={'image-n'} style={ { backgroundImage: `url(${image_details})` } }>
                </div>

                <div className={'movie-details'}>
                    <p className={'details-title'}>
                        {title_year} {duration_text[0]}h {duration_text[1]}min {duration_text[2]}s {rating}
                    </p>
                    <p className={'movie-description'}>
                        {large_description}
                    </p>
                    <GenreInformation genres={genres}/>
                    { actors ? <PersonInformation persons={actors} personType={'Actor'}/> : '' }
                    { directors ? <PersonInformation persons={directors} personType={'Director'}/> : '' }
                    { writers ? <PersonInformation persons={writers} personType={'Escritor'}/> : '' }
                    { producers ? <PersonInformation persons={producers} personType={'Productor'}/> : '' }

                    <div className={'social-icons'}>
                <span className={'item'}>
                    <FaMail className={'icon'}  />
                    <span className={'text'}>e-mail</span>
                </span>
                        <span className={'item'}>
                    <FaFacebook className={'icon'}  />
                    <span className={'text'}>Compartir</span>
                </span>
                    </div>
                </div>

            </div>

            <div className={'container-cover'}
                 style={ {backgroundImage: `url(${image_background})` }}>
            </div>

        </div>
    );
};

MovieInformation.propTypes = {
    title: PropTypes.string.isRequired,
    title_year: PropTypes.string.isRequired,
    duration_text: PropTypes.array.isRequired,
    rating: PropTypes.string.isRequired,
    large_description: PropTypes.string.isRequired,
    image_details: PropTypes.string.isRequired,
    image_background: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    actors: PropTypes.array.isRequired,
    directors: PropTypes.array.isRequired,
    writers: PropTypes.array,
    producers: PropTypes.array
};

export default MovieInformation;