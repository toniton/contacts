// Styles

// Dependencies
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import HeaderComponent from '../../components/header.component';
import SidebarComponent from '../../components/sidebar.component';

export default class SidebarLayout extends Component {
    static propTypes = {
        component: PropTypes.any,
        background: PropTypes.string,
        path: PropTypes.string
    };

    searchChange = (query) => {
        this.props.component.prototype.search.call(query);
    }

    render() {
        const { background, component, path } = this.props;
        return (
            <div className="layout" style={{ background: background }}>
                <HeaderComponent onChange={this.searchChange}/>
                <div className="container-fluid">
                    <div className="row">
                        <SidebarComponent />
                        <div className="col-md-12 col-lg-7 main">
                            <Route path={path} component={component}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}