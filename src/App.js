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




class App extends Component {
  render() {
    return (
     <div>
       <NavBar/>
       <Switch>
          <Route exact path="/" component={CinemaList}></Route>
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
