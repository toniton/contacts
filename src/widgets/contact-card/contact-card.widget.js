// Styles
import './contact-card.widget.scss';

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactCardWidget extends Component {
    static propTypes = {
        contact: PropTypes.any,
    };

    render() {
        const { contact } = this.props;
        return (
            <div key={contact.id} className="contact-card">
                <div className="contact-details">
                    <h6>{contact.name.first} {contact.name.last}</h6>
                    <p className="text-muted my-0">{contact.mobile}</p>
                </div>
                <div className="contact-actions">
                    <a href={`tel:${contact.mobile}`} className="phone">
                        <i className="fa far fa-phone"></i>
                    </a>
                </div>
            </div>
        )
    }
}