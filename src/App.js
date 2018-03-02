import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import userService from './utils/userService';
import {Switch, Route, Redirect} from 'react-router-dom';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LoginForm from './components/LoginForm/LoginForm';
import Quiz from './components/Quiz/Quiz';
import LandingPage from './components/LandingPage/LandingPage';
import questions from './questions'

class App extends Component { 
  constructor() {
    super();
    this.state = {
      user: null,
      questions: this.shuffle(questions),
      currentQ: 0
    }
  }
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
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

  onAnswer = (correct) => {
    if (correct) {
      this.setState({
        currentQ: this.state.currentQ +1
      })
    } else {
      alert('Rewatch the Show, you pleb!')
    }
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
          <Route exact path='/quiz' render={(props) => 
            userService.getUser() ?
            <Quiz 
              {...props}
              onAnswer={this.onAnswer}
              currentQ={this.state.currentQ}
              questions={this.state.questions}
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
            :
            <Redirect to="/login" />
          } />
          <Route exact path='/' render={(props) => 
            <LandingPage 
              {...props}
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
