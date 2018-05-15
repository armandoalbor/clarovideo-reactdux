import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import { getMenu } from '../reducers';
import NavBar from '../components/HeaderItems/NavBar';

/*
import { setMovieSectionListData, setSelectedMovie } from '../actions';
import { getListMovies } from '../reducers';
import { getMovie } from '../reducers';
import MovieList from "../components/MovieList";
*/

class NavBarContainer extends Component {
    render() {
        const { menu } = this.props;
        return (
            <NavBar menu={menu} />
        );
    }
}

NavBarContainer.propTypes = {
    menu: PropTypes.array.isRequired
};

/*
const mapDispatchToProps = dispatch => ({
    setMovieListData: () => dispatch(setMovieSectionListData()),
    setSelectedMovie: movie => dispatch(setSelectedMovie(movie))
});
*/

const mapStateToProps = state => ({
    menu: getMenu(state)
});

export default connect(mapStateToProps, null)(NavBarContainer);
