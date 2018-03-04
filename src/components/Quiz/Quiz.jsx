import React, { Component } from 'react';
import '../Quiz/Quiz.css';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: false,
            message: ''
        }
    }

    _onAnswer = (correct) => {
        let message = correct ? 'You right!' : 'You suck!';
        this.setState({
            showMessage: true,
            message
        }, () => {
            setTimeout(() => {
                this.props.onAnswer(correct)
                this.setState({ showMessage: false })
            }, 2000)
        })
    }

    render() {
        const q = this.props.questions[this.props.currentQ];
        return (
            <div className="quiz">
                {
                    this.state.showMessage && <div className="alert">{this.state.message}</div>
                }
                <h1>{q.question}</h1>
                <ul>
                    {
                        q.choices.map((choice, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    const correct = choice === q.answer;
                                    this._onAnswer(correct);
                                }}>
                                <h3>{choice}</h3>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    
}

export default Quiz;