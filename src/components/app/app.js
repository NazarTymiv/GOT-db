import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, BooksPage, HousePage, BooksItem, errorPage} from '../pages';

import gotService from '../../services/gotService';

import './app.css'


export default class App extends React.Component {
    gotService = new gotService()

    state = {
        showRandomChar: true,
        error: false
    }

    onToggleRandomChar = () => this.setState({showRandomChar: !this.state.showRandomChar})

    render() {
        const {showRandomChar} = this.state

        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {showRandomChar ? <RandomChar interval={15000} /> : null}
                                <button className="toggle-btn" onClick={this.onToggleRandomChar} >Toggle random character</button>
                            </Col>
                        </Row>
                        <Switch>
                            <Route path='/' exact component={() => <h1>Welcome to GOT DB</h1>} />
                            <Route path='/characters' component={CharacterPage} />
                            <Route path='/houses' component={HousePage} />
                            <Route path='/books' exact component={BooksPage} />
                            <Route path='/books/:id' render={({match}) => <BooksItem bookId={match.params.id} />} />
                            <Route exact component={errorPage} />
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
};