import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCkQ1nNSL_if5Hit1qOORhG3c5EOrM_py8",
  authDomain: "my-awesome-project-ebf03.firebaseapp.com",
  databaseURL: "https://my-awesome-project-ebf03.firebaseio.com",
  projectId: "my-awesome-project-ebf03",
  storageBucket: "my-awesome-project-ebf03.appspot.com",
  messagingSenderId: "1097690692681",
  appId: "1:1097690692681:web:daae9028aaf8f8d338d398",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth =  firebase.auth();
