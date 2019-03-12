import React, { Component } from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js/';
import CinemaList from './components/CinemaList';




class App extends Component {
  render() {
    return (
     <div>
       <NavBar/>
       <Switch>
          <Route exact path="/" component={CinemaList}></Route>
       </Switch>
     </div>
    );
  }
}

export default App;
