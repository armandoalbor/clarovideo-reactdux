import React from 'react';
import PropTypes from 'prop-types';
import FaSearch from 'react-icons/lib/fa/search';
import './FilterInput.css';

const FilterInput = ({ onChangeEvent }) => (
    <div className={'input-search'}>
        <input type="text" placeholder="Buscar" onChange={onChangeEvent}/>
        <FaSearch className={'btn-search'} />
    </div>
);

FilterInput.propTypes = {
    onChangeEvent: PropTypes.func.isRequired
};

export default FilterInput;
