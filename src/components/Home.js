import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2 className="head">Welcome Developer!</h2>
                <p className="content">Welcome to Devify! Devify is an app that understands you. You ever just have free time and want to make something but have no idea what to do? Or are you just a beginner looking for projects to make?
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
