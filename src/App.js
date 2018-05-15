import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'weather-icons/css/weather-icons.css';

import './App.css';
import MovieListContainer from './containers/MovieListContainer';
import NavBarContainer from './containers/NavBarContainer';
import FilterInputContainer from './containers/FilterInputContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';

class App extends Component {
    render() {
        return (
            <div>
                <Grid className={'menu-container'}>
                    <Row>
                        <Col xs={12} sm={5} >
                            <img className="logo" src="./logo.svg" alt="Clarovideo"/>
                        </Col>
                        <Col xs={12} sm={7} >
                            <FilterInputContainer />
                        </Col>
                        <Col xs={12}>
                            <NavBarContainer />
                        </Col>
                    </Row>
                </Grid>

                <Grid className={'movies-container'}>
                    <Row>
                        <MovieDetailContainer xs={12} />
                    </Row>
                </Grid>

                <Grid className={'movies-container'}>
                    <Row>
                         <MovieListContainer xs={12} />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
