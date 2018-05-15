import React from 'react';
import PropTypes from 'prop-types';

const PersonInformation = ({ persons, personType }) => {
    const strToComponent = persons => {
        return persons[0].talents.talent.map((person) => (
            <span className={'person'} key={person.id} > { person.fullname }</span>
        ));
    };
    return (
        persons[0] ?
        <p className={'person-details'}>
            <strong>{personType}:</strong> { strToComponent(persons) }
        </p> : <p className={'person-details'}></p>
    );
};

PersonInformation.propTypes = {
    persons: PropTypes.array.isRequired,
    personType: PropTypes.string.isRequired
};

export default PersonInformation;