import React from 'react';
import PropTypes from 'prop-types';
import MovieInformation from './MovieInformation';
const MovieDetails = ({ data }) => (
    <div>
        {
            data.title_year &&
                <MovieInformation title={data.title}
                                  title_year={data.title_year}
                                  duration_text={data.duration_text}
                                  rating={data.rating}
                                  large_description={data.large_description}
                                  image_details={data.image_details}
                                  image_background={data.image_background}
                                  genres={data.genres}
                                  actors={data.actors}
                                  directors={data.directors}
                                  writers={data.writers}
                                  producers={data.producers} />
        }
    </div>
);

MovieDetails.propTypes = {
    data: PropTypes.shape({
        title_year: PropTypes.string,
        duration_text: PropTypes.array,
        rating: PropTypes.string,
        large_description: PropTypes.string,
        genres: PropTypes.array,
        actors: PropTypes.array,
        directors: PropTypes.array,
        writers: PropTypes.array,
        producers: PropTypes.array
    })
};

export default MovieDetails;