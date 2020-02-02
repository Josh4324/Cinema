import "firebase/auth";
import firebase from "firebase";
import Rebase from "re-base";


const config = {
  apiKey: "AIzaSyC3bHnAz_FdiGKMb8R67rtSs339RwnFWsk",
  authDomain: "cinema-app-b3fbf.firebaseapp.com",
  databaseURL: "https://cinema-app-b3fbf.firebaseio.com",
  projectId: "cinema-app-b3fbf",
  storageBucket: "cinema-app-b3fbf.appspot.com",
  messagingSenderId: "176542426944",
  appId: "1:176542426944:web:380db3279318ddca74bca5",
  measurementId: "G-E7DHLHXQXR"
};


const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());


const fireAuth = firebaseApp.auth();
export {base, fireAuth, firebase }