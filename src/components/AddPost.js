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
            desc: '',
            sampLink: ''
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
                    createdAt: timestamp,
                    sampLink: this.state.sampLink
                });
                this.setState({
                    title: '',
                    body: '',
                    desc: '',
                    sampLink: ''
                })
                alert("Project has been submitted! It will be soon reviewed by the mods and added to the list.");
            }
        }

        return (
            <div>
                <Nav />
                <form>
                    <center>
                        <div className="input-field col s6">
                            <input id="Title" type="text" className="validate" onChange={e => {
                                this.setState({ title: e.target.value })
                            }} />
                            <label htmlFor="Title">Title</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Title" type="text" onChange={e => {
                                this.setState({ desc: e.target.value })
                            }} />
                            <label htmlFor="Short Description">Short Description</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea body-add" onChange={e => { this.setState({ body: e.target.value }) }}></textarea>
                            <label htmlFor="Body">Body</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="url" onChange={e => {
                                this.setState({ sampLink: e.target.value })
                            }} />
                            <label htmlFor="Sample Link">Sample Link (Remember to add http:// or https:// otherwise it'll not work)</label>
                        </div>
                        <button className="btn waves-effect waves-light" name="action" onClick={sumbitHandler}>Submit</button>
                    </center>
                </form>
            </div >
        )
    }
}
