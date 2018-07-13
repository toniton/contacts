// Styles

// Dependencies
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import HeaderComponent from '../../components/header.component';

export default class PlainLayout extends Component {
    static propTypes = {
        component: PropTypes.any,
        path: PropTypes.string
    };

    render() {
        const { component, path } = this.props;
        return (
            <div className="layout plain">
                <HeaderComponent />
                <div className="container-fluid">
                    <Route path={path} component={component} />
                </div>
            </div>
        )
    }
}