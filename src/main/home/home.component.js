// Styles
import './home.component.scss';

// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ContactCardWidget from '../../widgets/contact-card/contact-card.widget';
import HandleBarWidget from '../../widgets/handle-bar/handle-bar.widget';
import * as contactReducer from '../../reducers/contacts.reducer';
import * as contactAction from '../../actions/contacts.action';



export class HomeComponent extends Component {
    static propTypes = {
        search: PropTypes.func,
        grouped: PropTypes.any
    };

    componentDidMount() {
        this.props.search();
    }

    render() {
        const { grouped } = this.props;
        return (
            <div id="home-page">
                {
                    ((grouped) => {
                        if (grouped && _.size(grouped) === 0) {
                            return (<h4>No result found for contacts!</h4>);
                        } else {
                            return (
                                <div className="d-flex">
                                    <HandleBarWidget groups={grouped} />
                                    <div className="contact-list">
                                        {
                                            _.map(grouped, (group) => {
                                                {
                                                    return _.map(group, (contact) => {
                                                        return (<ContactCardWidget key={contact.id} contact={contact} />);
                                                    })
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            );
                        }

                    })(grouped)
                }
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        grouped: contactReducer.getGroupedContacts(state)
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {
        search: (query) => dispatch(contactAction.fetchContacts({
            q: query || '',
            _sort: 'name.first',
            _order: 'asc'
        })),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);