import React, { Component } from 'react';
import db from '../firebase/firebase';
import firebase from "firebase";

export default class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            lang: ''
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
                    lang: this.state.lang,
                    createdAt: timestamp
                });
                alert("Post has been submitted!", this.state.title);
            }
        }

        return (
            <div>
                <form>
                    <center>
                        <div className="input-field col s6">
                            <input id="Title" type="text" className="validate" onChange={e => {
                                this.setState({ title: e.target.value })
                            }} />
                            <label htmlFor="Title">Title</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="title" type="text" className="validate body-add" onChange={e => {
                                this.setState({ body: e.target.value })
                            }} />
                            <label htmlFor="title">Body</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="title" type="text" className="validate" onChange={e => {
                                this.setState({ lang: e.target.value })
                            }} />
                            <label htmlFor="Language">Language</label>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={sumbitHandler}>Submit</button>
                    </center>
                </form>
            </div>
        )
    }
}
