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
                <h1>Results Page</h1>
                <h1>{this.props.correct}/{this.props.maxQuestions}</h1>
                <a href="/quiz">Try again?</a>

            </div>
        )
    }
}

export default Results;