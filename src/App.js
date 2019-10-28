import React, { Component } from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js/';
import CinemaList from './components/CinemaList';
import Discover from './components/Discover';
import Review from './components/Review';
import Notification from './components/Notification';
import Add from './components/Add';
import Register from './components/Register';
import Login from './components/Login';
import { fireAuth } from "./config/fire";
import withAuthProtection from "./config/WithAuthProtection";

const ProtectedRoute = withAuthProtection("/login")(CinemaList);

class App extends Component {

  constructor() {
    super();
    console.log("user", fireAuth.currentUser);
    this.state = {
      me: JSON.parse(localStorage.getItem('me')),
      logState: false
    };
  }

  componentDidMount() {
    const value = this.state.me !== null ? true : false;
    fireAuth.onAuthStateChanged(me => {
     
      localStorage.setItem('me', JSON.stringify(me));
      this.setState({ 
        me,
        logState: value
      });
    },
    () => {
      localStorage.remove('me')
    });
  }

  handleSignIn = history => (email, password) => {
    return fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      this.setState({logState:true})
      return history.push("/");
    });
  };
  
  handleSignUp = history => (email, password) => {
    return fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      this.setState({logState:true})
      return history.push("/");
    });
  };

  SignOut = history => () => {
    return fireAuth.signOut().then( () => {
      this.setState({logState:false})
      return history.push("/login")
    })
  }


  render() {
    const { me, logState } = this.state;
    
    

    return (
     <div>
       <NavBar onSubmit={this.SignOut()} logState={logState} me={me}/>
       <Switch>

        <Route exact path="/" render={
            props => (
              <ProtectedRoute {...props} me={me} />
            )
          } 
          />

          <Route path="/login" render={
            ({ history}) => (
              <Login onSubmit={this.handleSignIn(history)}/>
            )
          } 
          />

           <Route path="/register" render={
            ({ history}) => (
              <Register onSubmit={this.handleSignUp(history)}/>
            )
          } 
          />
          
         
          <Route  path="/Discover" component={Discover}></Route>
          <Route  path="/Review" component={Review}></Route>
          <Route  path="/Notification" component={Notification}></Route>
          <Route  path="/Add" component={Add}></Route>
       </Switch>
     </div>
    );
  }
}

export default App;
