import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
