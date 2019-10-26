import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


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

class Firebase {
  constructor(){
      app.initializeApp(config)

      this.auth = app.auth();
      this.db = app.database();
  }

  // **** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>  
      this.auth.createUserWithEmailAndPassword(email,password);

  doSignInWithEmailAndPassword = (email,password) => 
      this.auth.signInWithEmailAndPassword(email,password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => 
      this.auth.currentUser.updatePassword(password);

  // *** User API ****

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;

