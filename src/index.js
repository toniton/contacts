// Styles
import './styles/index.scss';

// Dependencies
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import { thunk } from 'redux-thunk';

import 'bootstrap/dist/js/bootstrap.js';

// Layouts
import SidebarLayout from './core/layouts/sidebar/sidebar.layout';
import PlainLayout from './core/layouts/plain/plain.layout';

// Components
import HomeComponent from './main/home/home.component';
import ErrorsComponent from './main/errors/errors.component';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
const root = createRoot(document.getElementById('app'))
root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" exact element={<SidebarLayout background="#fafafa" component={HomeComponent} />} />
                <Route element={<PlainLayout background="#ff686870" component={ErrorsComponent} />} />
            </Routes>
        </Router>
    </Provider>
);