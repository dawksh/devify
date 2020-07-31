import React, { Component } from 'react';
import firebase from 'firebase';
import Dash from './Dash';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pass: '',
            loggedIn: false
        }
    }

    componentDidMount() {
        localStorage.getItem("loggedIn") ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false })
    }
    render() {

        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                var email = user.email;
                console.log(email);
                localStorage.setItem('loggedIn', true);
            } else {
                console.log("not logged in yet!");
                localStorage.setItem('loggedIn', false);
            }
        });

        const logOut = async (e) => {
            e.preventDefault()
            firebase.auth().signOut();
            this.setState({ loggedIn: false })
        }

        const signIn = async (e) => {
            e.preventDefault();
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).then(async () => {
                await alert("Logged In successfully!");
                window.location.reload();
            }).catch(function (error) {
                var errorMessage = error.message;
                var errorCode = error.code;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
            });
        }

        return (
            <div>
                {
                    this.state.loggedIn ? <div> <button className="btn waves-effect waves-light" type="submit" name="action" onClick={logOut}>Sign Out</button> <Dash /> </div> : <div>
                        <input type="email" name="email" placeholder="email" onChange={(e) => {
                            this.setState({ email: e.target.value })
                        }} />
                        <input type="password" name="pass" placeholder="password" onChange={(e) => {
                            this.setState({ pass: e.target.value })
                        }} />
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={signIn}>Sign In</button></div>
                }
            </div>
        )
    }
}
