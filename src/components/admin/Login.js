import React, { Component } from 'react';
import firebase from 'firebase';
import Dash from './Dash';
import Nav from '../Nav'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pass: '',
            loggedIn: false,
            propsMail: ''
        }
    }

    componentDidMount() {
        localStorage.getItem("loggedIn") === "true" ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false });
    }
    render() {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                const email = user.email;
                localStorage.setItem('email', email);
                localStorage.setItem('loggedIn', true);
                console.log("User is logged in");
            } else {
                console.log("User isn't logged in");
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
                    this.state.loggedIn ?
                        <div>
                            <Nav />
                            <center>
                                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={logOut}>Sign Out</button>
                            </center>
                            <Dash email={localStorage.getItem("email")} />
                        </div> :
                        <div>
                            <input type="email" className="loginFormInput" name="email" placeholder="Email" onChange={(e) => {
                                this.setState({ email: e.target.value })
                            }} />
                            <input type="password" className="loginFormInput" name="pass" placeholder="Password" onChange={(e) => {
                                this.setState({ pass: e.target.value })
                            }} />
                            <center>
                                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={signIn}>Sign In</button>
                            </center>
                        </div>
                }
            </div>
        )
    }
}
