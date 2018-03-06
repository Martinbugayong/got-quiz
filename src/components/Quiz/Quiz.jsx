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

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentQ < this.props.maxQuestions)
        this.setState({ showMessage: false })
    }

    _onAnswer = (correct) => {
        let message = correct ? 'You right!' : 'You wrong!';
        this.setState({
            showMessage: true,
            message
        }, () => {
            setTimeout(() => {
                this.props.onAnswer(correct)
            }, 1250)
        })
    }

    render() {
        const q = this.props.questions[this.props.currentQ];
        if (this.props.questions.length === 0) return <h1>...Loading questions...</h1>;
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