// Styles
import './styles/index.scss';

// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';

import 'bootstrap/dist/js/bootstrap.js';

// Layouts
import SidebarLayout from './core/layouts/sidebar/sidebar.layout';
import PlainLayout from './core/layouts/plain/plain.layout';

// Components
import HomeComponent from './main/home/home.component';
import ErrorsComponent from './main/errors/errors.component';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <SidebarLayout background="#fafafa" exact path="/" component={HomeComponent} />
                <PlainLayout background="#ff686870" component={ErrorsComponent} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
);