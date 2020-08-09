import React, { Component } from 'react';
import { withRouter } from "react-router";
import DB from '../../firebase/firebase';
import Loader from '../Loader';
import Nav from '../Nav';

class ProjectUnApproved extends Component {
    constructor(props) {
        super(props)
        this.state = {
            project: [],
            render: false
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        DB.collection("unapprovedPosts").doc(id).get().then((doc) => {
            this.setState({
                project: doc.data(),
                render: true
            })
        })
    }
    render() {
        return (
            <div>
                <Nav />
                {this.state.render ?
                    <div className="projectContainer">
                        <h3 className="title">{this.state.project.title}</h3>
                        <hr className="separator" />
                        <p className="body">{this.state.project.body}</p>
                        <p>Sample Link: <a href={this.state.project.sampLink}>Click here</a></p>
                    </div>
                    : <center><Loader /></center>}
            </div>
        )
    }
}

export default withRouter(ProjectUnApproved);