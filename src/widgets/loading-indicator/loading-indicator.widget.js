// Styles
import './loading-indicator.widget.scss';

// Dependencies
import React, { Component } from 'react';

export default class LoadingIndicatorWidget extends Component {
    render() {
        return (
            <div id="loading-widget">Loading
              <span className="loading-dot">.</span>
              <span className="loading-dot">.</span>
              <span className="loading-dot">.</span>
            </div>
        )
    }
}