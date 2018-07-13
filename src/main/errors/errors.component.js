// Styles
import './errors.component.scss';

// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorsComponent = () => (
    <div id="error-page" className="align-text-center">
        <div className="grid">
            <div className="block-8">
                <h1>404 Errors Page!</h1>
                <p className="highlight-text"> How did you get here?</p>
                <Link to="/"> Go Home</Link>
            </div>
        </div>
    </div>
);

export default ErrorsComponent