import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import FilterInput from '../components/HeaderItems/FilterInput';
import { setMovieFilteredData, setFilter } from '../actions';
import { getFilter } from '../reducers';

class FilterInputContainer extends Component {

    handleOnChangeEvent = (event) => {
        const { setMovieFilteredData } = this.props;
        setMovieFilteredData( event.target.value );
    };

    render() {
        return (
            <FilterInput onChangeEvent={this.handleOnChangeEvent}/>
        );
    }
}


FilterInputContainer.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func.isRequired,
    setMovieFilteredData: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter)),
    setMovieFilteredData: filter => dispatch(setMovieFilteredData(filter))
});

const mapStateToProps = state => ({
    filter: getFilter(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterInputContainer);
