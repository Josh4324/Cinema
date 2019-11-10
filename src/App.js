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




class App extends Component {

  constructor() {
    super();
    console.log("user", fireAuth.currentUser);
    
    this.state = {
      me: JSON.parse(localStorage.getItem('me')),
      logState: false,
      err: false,
      submitting: false
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
    this.setState({submitting:true})
    return fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      this.setState({logState:true})
      console.log("done")
      console.log(history)
      return history.push("/");
      
    },
    err => {
      this.setState({submitting:false})
      this.setState({err: true})
      console.log("error", err)
    }
    
    );

  };
  
  handleSignUp = history => (email, password) => {
    return fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      return history.push("/");
    });
  };
  

  SignOut = history => () => {
    return fireAuth.signOut().then( () => {
      console.log(history)
      return history.push("/")
    })
  }


  render() {
    const { me, logState } = this.state;
    
    

    return (
     <div>
       <NavBar onSubmit={this.SignOut()} logState={logState} me={me}/>
       <Switch>

          <Route exact path="/" render={ ({history}) => ( <CinemaList logState={logState} me={me} history={history}  / > )}  />

          <Route path="/login" render={
            ({ history}) => (
              <Login err={this.state.err} submitting={this.state.submitting} onSubmit={this.handleSignIn(history)}/>
            )
          } 
          />

           <Route path="/register" render={
            ({ history}) => (
              <Register onSubmit={this.handleSignUp(history)}/>
            )
          } 
          />

          <Route exact path="/discover" render={ ({history}) => ( <Discover logState={logState} me={me} history={history}  / > )}  />
          <Route exact path="/review" render={ ({history}) => ( <Review logState={logState} me={me} history={history}  / > )}  />
          <Route exact path="/notification" render={ ({history}) => ( <Notification logState={logState} me={me} history={history}  / > )}  />
          <Route exact path="/add" render={ ({history}) => ( <Add logState={logState} me={me} history={history}  / > )}  />
       </Switch>
     </div>
    );
  }
}

export default App;
