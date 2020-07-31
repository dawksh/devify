import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAfB8Cdsu_EQ02kDQMuFDFyuvFDcf1drhs",
    authDomain: "devify-app.firebaseapp.com",
    databaseURL: "https://devify-app.firebaseio.com",
    projectId: "devify-app",
    storageBucket: "devify-app.appspot.com",
    messagingSenderId: "375610236429",
    appId: "1:375610236429:web:404091ae6fe6c850c2bf44",
    measurementId: "G-QXNK5W83B5"
};

firebase.initializeApp(config);
const DB = firebase.firestore();

export default DB;