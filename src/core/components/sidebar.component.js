// Styles

// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as sidebarReducer from '../../reducers/sidebar.reducer';

class SidebarComponent extends Component {
    static propTypes = {
        sidebarExpanded: PropTypes.bool
    };

    render() {
        const { sidebarExpanded } = this.props;
        return (
            <div className={`col side-bar${sidebarExpanded ? ' expanded' : ''}`}>
                <nav className="nav flex-column">
                    <a className="nav-link active" href="#">All Contacts</a>
                    <a className="nav-link" href="#">My Family</a>
                    <a className="nav-link" href="#">Co-workers</a>
                    <a className="nav-link" href="#">Acquiantances</a>
                    <a className="nav-link" href="#">Girlfriends</a>
                    <a className="nav-link disabled" href="#">Block List</a>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        sidebarExpanded: sidebarReducer.getSidebarStatus(state)
    };
}
export default connect(mapStateToProps)(SidebarComponent);