import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Homepage</Link></li>
                        <li><Link to="/addProject">Add Project</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
