import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav";

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <Nav />
                <center>
                    <h3 className="error">404 Error: Path not found</h3>
                    <Link to="/">Go back to homepage.</Link>
                </center>
            </div>
        )
    }
}
