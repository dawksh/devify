import React, { Component } from 'react';
import db from '../firebase/firebase';
import firebase from "firebase";

export default class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }
    render() {

        const sumbitHandler = async (e) => {
            e.preventDefault()
            const timestamp = firebase.firestore.Timestamp.now();
            if (this.state.title === '') {
                alert("Please type a valid title!");
            } else if (this.state.body === '') {
                alert("Please type a valid body!");
            } else {
                await db.collection('unapprovedPosts').add({
                    title: this.state.title,
                    body: this.state.body,
                    createdAt: timestamp
                });
                this.setState({
                    title: '',
                    body: ''
                })
                alert("Post has been submitted!");
            }
        }

        return (
            <div>
                <form>
                    <center>
                        <div className="input-field col s6">
                            <input id="Title" type="text" className="validate" value={this.state.title} onChange={e => {
                                this.setState({ title: e.target.value })
                            }} />
                            <label htmlFor="Title">Title</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea body-add" value={this.state.body} onChange={e => { this.setState({ body: e.target.value }) }}></textarea>
                            <label htmlFor="textarea1">Body</label>
                        </div>
                        <button className="btn waves-effect waves-light" name="action" onClick={sumbitHandler}>Submit</button>
                    </center>
                </form>
            </div>
        )
    }
}
