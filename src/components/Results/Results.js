import React, { Component } from 'react';
import '../Results/Results.css';


class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div className="results">
                <h1>You got {this.props.correct}/{this.props.maxQuestions}</h1>
                <a href="/quiz">Try again?</a>
            </div>
        )
    }
}

export default Results;