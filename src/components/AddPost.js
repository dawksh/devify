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
            await db.collection('unapprovedPosts').add({
                title: this.state.title,
                body: this.state.body,
                createdAt: timestamp
            })
            alert("Post has been submitted!", this.state.title)
        }

        return (
            <div>
                <form>
                    <div className="input-field col s6">
                        <input id="Title" type="text" className="validate" onChange={e => {
                            this.setState({ title: e.target.value })
                        }} />
                        <label htmlFor="Title">Title</label>
                    </div>
                    <br />
                    <div className="input-field col s6">
                        <input id="title" type="text" className="validate" onChange={e => {
                            this.setState({ body: e.target.value })
                        }} />
                        <label htmlFor="title">Body</label>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={sumbitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}
