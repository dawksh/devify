import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2 className="head">Welcome to Devify!</h2>
                <p className="content">Welcome Developer! Devify is an app that is built for you. You ever just have free time and want to make something but have no idea what to do? Or are you just a beginner looking for projects to make?
                <br />
                There are no limits to what you can achieve. Build a project intended to build be built on Java using Javascript, break the barriers and rise up!
                    <br />
                Devify will make this easy for you. Get ideas for projects from hundreds of developers around the world and start building!
                </p>
                <br />
                <div className="links">
                    Checkout all the projects <Link to="/projects" >here</Link>
                    <br />
                    Have a cool idea?<Link to="/addProject" > Share</Link> with the world!
                </div>
            </div>
        )
    }
}
