import React, { Component } from 'react';
import db from '../firebase/firebase';
import firebase from "firebase";
import Nav from "./Nav";

export default class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            desc: ''
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
            } else if (this.state.desc === '') {
                alert("Please enter a valid short description");
            } else {
                await db.collection('unapprovedPosts').add({
                    title: this.state.title,
                    body: this.state.body,
                    desc: this.state.desc,
                    createdAt: timestamp
                });
                this.setState({
                    title: '',
                    body: '',
                    desc: ''
                })
                alert("Post has been submitted!");
            }
        }

        return (
            <div>
                <Nav />
                <form>
                    <center>
                        <div className="input-field col s6">
                            <input id="Title" type="text" className="validate" value={this.state.title} onChange={e => {
                                this.setState({ title: e.target.value })
                            }} />
                            <label htmlFor="Title">Title</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Title" type="text" value={this.state.desc} onChange={e => {
                                this.setState({ desc: e.target.value })
                            }} />
                            <label htmlFor="Title">Short Description</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea body-add" value={this.state.body} onChange={e => { this.setState({ body: e.target.value }) }}></textarea>
                            <label htmlFor="textarea1">Body</label>
                        </div>
                        <button className="btn waves-effect waves-light" name="action" onClick={sumbitHandler}>Submit</button>
                    </center>
                </form>
            </div >
        )
    }
}
