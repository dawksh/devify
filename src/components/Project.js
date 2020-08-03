import React, { Component } from 'react';
import { withRouter } from "react-router";
import DB from '../firebase/firebase';

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            project: [],
            render: false
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        DB.collection("approvedPosts").doc(id).get().then((doc) => {
            this.setState({
                project: doc.data(),
                render: true
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.render ? <div>
                    <h3>{this.state.project.title}</h3>
                    <br />
                    <p>{this.state.project.body}</p>
                    <p>{this.state.project.lang}</p>
                </div>
                    : <>Loading...</>}
            </div>
        )
    }
}

export default withRouter(Project);