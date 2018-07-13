// Styles

// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as sidebarReducer from '../../reducers/sidebar.reducer';
import * as contactAction from '../../actions/contacts.action';
import * as sidebarAction from '../../actions/sidebar.action';

class HeaderComponent extends Component {
    static propTypes = {
        search: PropTypes.func.isRequired,
        toggleSidebar: PropTypes.func.isRequired,
        sidebarExpanded: PropTypes.bool
    };

    state = {
        search: ''
    }

    handleChange = ($event) => {
        let query = $event.target.value;
        this.props.search(query);
        this.setState({ search: $event.target.value });
    };

    searchContacts = (query) => {
        return (event) => {
            event.preventDefault();
            this.props.search(query);
        };
    };


    render() {
        const { sidebarExpanded, toggleSidebar } = this.props;
        const { search } = this.state;
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <button className={`sidebar-toggler ${sidebarExpanded? 'expanded': 'collapsed'}`} type="button" onClick={toggleSidebar} aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <i className="fa far fa-bars"></i>
                </button>
                <Link to="/" className="navbar-brand" href="#">Contacts</Link>
                <div className="collapse show navsearch" id="navbarMenuContent">
                    <form className="search-holder form-inline" onSubmit={this.searchContacts(search)}>
                        <input className="form-control mr-sm-2" type="search" value={search} onChange={this.handleChange} placeholder="Search contacts" aria-label="Search" />
                        <button className="btn btn-primary my-2 my-sm-0" type="submit"><i className="fa far fa-search"></i></button>
                    </form>
                </div>
            </nav>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        sidebarExpanded: sidebarReducer.getSidebarStatus(state)
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {
        search: (query) => dispatch(contactAction.fetchContacts({
            q: query || '',
            _sort: 'name.first',
            _order: 'asc'
        })),
        toggleSidebar: (event) => {
            dispatch(sidebarAction.toggleSidebar());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);