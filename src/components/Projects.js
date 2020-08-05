import React, { Component } from 'react';
import DB from '../firebase/firebase';
import Loader from "./Loader";
import ProjectListContainer from './containers/ProjectListContainer'

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projArr: [],
            render: false
        }
    }
    componentDidMount() {
        let arr = [];
        DB.collection('approvedPosts').orderBy("createdAt", "desc").onSnapshot(async snapshot => {
            let changes = snapshot.docChanges();
            await changes.forEach((change) => {
                arr.push({ data: change.doc.data(), id: change.doc.id })
            });
            this.setState({
                projArr: arr,
                render: true
            })
        })
    }
    render() {

        return (
            <div className="projectPage">

                {this.state.render ? <ProjectListContainer data={this.state.projArr} /> : <Loader />}

            </div >
        )
    }
}
