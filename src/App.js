import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Quiz from './components/Quiz/Quiz';
import LandingPage from './components/LandingPage/LandingPage';
import Results from './components/Results/Results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      currentQ: 0,
      correct: 0,
      maxQuestions: 15
    }
  }

  onAnswer = (correct) => {
    this.setState({
      currentQ: this.state.currentQ + 1
    })
    if (correct) {
      this.setState({
        correct: this.state.correct + 1
      }, () => {
      })
    } else {
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
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/quiz' render={(props) =>
              <Quiz
                {...props}
                onAnswer={this.onAnswer}
                currentQ={this.state.currentQ}
                maxQuestions={this.state.maxQuestions}
                questions={this.state.questions}
              />
          } />
          <Route exact path='/results' render={(props) =>
              <Results
                {...props}
                correct={this.state.correct}
                maxQuestions={this.state.maxQuestions}
              />
          } />
          <Route exact path='/' render={(props) =>
            <LandingPage
              {...props}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
