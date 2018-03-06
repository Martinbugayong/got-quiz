import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import userService from './utils/userService';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LoginForm from './components/LoginForm/LoginForm';
import Quiz from './components/Quiz/Quiz';
import LandingPage from './components/LandingPage/LandingPage';
import Results from './components/Results/Results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      questions: [],
      currentQ: 0,
      correct: 0,
      maxQuestions: 15
    }
  }


  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
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
    this.setState({
      currentQ: this.state.currentQ + 1
    })
    if (correct) {
      console.log("check this out")
      this.setState({
        correct: this.state.correct + 1
      }, () => {
        console.log(this.state.correct)
      })
    } else {
      console.log(this.state.correct)
    }
    if (this.state.currentQ === this.state.maxQuestions) {
      this.props.history.push('/results');
    }
  }

  shuffle = (arr) => {
    var currentIndex = arr.length, tempVal, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempVal = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = tempVal;
    }
    return arr;
  }
  /*---------- Lifecycle Methods ----------*/
  componentDidMount() {
    fetch('/api/questions')
      .then(res => res.json())
      .then(questions => this.setState({ questions: this.shuffle(questions) }))
      .catch(err => console.log(err))
    let user = userService.getUser();
    this.setState({ user });
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
                maxQuestions={this.state.maxQuestions}
                questions={this.state.questions}
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
              :
              <Redirect to="/login" />
          } />
          <Route exact path='/results' render={(props) =>
            userService.getUser() ?
              <Results
                {...props}
                correct={this.state.correct}
                maxQuestions={this.state.maxQuestions}
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
