import React, { Component } from 'react';
import DB from '../../firebase/firebase';
import Loader from '../Loader';

export default class Dash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            render: false
        }
    }
    componentDidMount() {
        const arr = []
        DB.collection("unapprovedPosts").onSnapshot(async (snapshot) => {
            let changes = snapshot.docChanges();
            await changes.forEach((change) => {
                if (change.type === "added") {
                    arr.push({ data: change.doc.data(), id: change.doc.id })
                } else if (change.type === "removed") {
                    let indice;
                    for (var i = 0; i > arr.length; i++) {
                        if (arr[i] === change.doc.data().title) {
                            indice = i;
                        }
                    }
                    arr.splice(indice, 1);
                }
            });
            this.setState({
                projects: arr,
                render: true,
            })
        })
    }

    render() {
        const approve = async (e) => {
            const id = e.target.id;
            let data = [];
            await DB.collection("unapprovedPosts").doc(id).get().then((doc) => {
                data = doc.data()
            });
            console.log(data);
            await DB.collection("approvedPosts").add({ title: data.title, body: data.body, createdAt: data.createdAt, desc: data.desc, approvedBy: this.props.email, sampLink: data.sampLink });
            await DB.collection("unapprovedPosts").doc(id).delete();
            data = []
            console.log(data);
        }
        const reject = async (e) => {
            const id = e.target.id;
            await DB.collection("unapprovedPosts").doc(id).delete();
        }
        return (
            <div className="projectPage">
                {this.state.render ? this.state.projects.map((el, index) => {
                    return (
                        <div className="row" key={index}>
                            <div className="col s12 m6">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">{el.data.title}</span>
                                        <p>{el.data.desc}</p>
                                    </div>
                                    <div className="card-action">
                                        <a className="approve-btn" onClick={approve} id={el.id}>Approve</a >
                                        <a className="reject-btn" onClick={reject} id={el.id}>Reject</a >
                                        <a href={`/project/un/` + el.id}>View</a >
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) : <div><center><Loader /></center></div>}
            </div >
        )
    }
}
