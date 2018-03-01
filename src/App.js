import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import userService from './utils/userService';
import {Switch, Route} from 'react-router-dom';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LoginForm from './components/LoginForm/LoginForm';


class App extends Component { 
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({
      user: userService.getUser()
    });
  }

  handleLogin = () => {
    this.setState({
      user: userService.getUser()
    });
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div className="App">
        <NavBar handleLogout={this.handleLogout} user={this.state.user} />
        <h1>GoT Quiz</h1>
        <h4>Valar Morghulis</h4>
        <Switch>
          <Route exact path='/signup' render={(props) => 
            <SignUpForm 
              {...props}
              handleSignup={this.handleSignup}
            />
          } />
          <Route exact path='/login' render={(props) => 
            <LoginForm 
              {...props}
              handleLogin={this.handleLogin}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
