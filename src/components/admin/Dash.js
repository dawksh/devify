import React, { Component } from 'react';
import DB from '../../firebase/firebase';

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
                    arr.splice(i, 1);
                }
            });
            this.setState({
                projects: arr,
                render: true
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
            await DB.collection("approvedPosts").add({ title: data.title, body: data.body, createdAt: data.createdAt });
            await DB.collection("unapprovedPosts").doc(id).delete();
            data = []
            console.log(data);
        }
        const reject = async (e) => {
            const id = e.target.id;
            await DB.collection("unapprovedPosts").doc(id).delete();
        }
        return (
            <div>
                {this.state.render ? this.state.projects.map((el, index) => {
                    return (
                        <div className="row" key={index}>
                            <div className="col s12 m6">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">{el.data.title}</span>
                                        <p>{el.data.body}</p>
                                    </div>
                                    <div className="card-action">
                                        <a onClick={approve} href="#" id={el.id}>Approve</a>
                                        <a onClick={reject} id={el.id}>Reject</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) : <p>loading</p>}
            </div >
        )
    }
}
