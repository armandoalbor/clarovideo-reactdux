import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';

const NavBar = ({ menu }) => {

    const strToComponent = menu => (
        menu.map((item) => (
                <li key={item}>
                    <a>{item}</a>
                </li>
            )
        )
    );

    return (
        <ul className="navbar-nav">
            { strToComponent(menu) }
        </ul>
    );
};

NavBar.propTypes = {
    menu: PropTypes.array.isRequired
};

export default NavBar;
