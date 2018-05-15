import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import { getMovie } from '../reducers';
import MovieDetails from "../components/MovieDetails";

class MovieDetailContainer extends Component {
    render() {
        return (
            <MovieDetails data={this.props.movie} />
        );
    }
}

MovieDetailContainer.propTypes = {
    movie: PropTypes.shape({
        title_year: PropTypes.string,
        duration_text: PropTypes.array,
        rating: PropTypes.string,
        genres: PropTypes.array,
        actors: PropTypes.array,
        directors: PropTypes.array,
        writers: PropTypes.array,
        producers: PropTypes.array
    })
};

const mapStateToProps = state => ({
    movie: getMovie(state)
});

export default connect(mapStateToProps, null)(MovieDetailContainer);
