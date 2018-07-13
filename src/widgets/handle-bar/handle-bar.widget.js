// Styles
import './handle-bar.widget.scss';

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HandleBarWidget extends Component {
    static propTypes = {
        groups: PropTypes.any,
    };

    render() {
        const { groups } = this.props;
        return (
            <div className="handle-bar">
                {
                    _.map(groups, (group, key) => {
                        return (<div className="handle-bar-group" key={key} style={{ height: `${(66 * group.length)}px` }}><div className="handle-bar-item">{key}</div></div>)
                    })
                }
            </div>
        )
    }
}