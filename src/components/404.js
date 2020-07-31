import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h3>Error! You seem to have reached a broken link.</h3>
                <Link to="/">Go back to homepage.</Link>
            </div>
        )
    }
}
