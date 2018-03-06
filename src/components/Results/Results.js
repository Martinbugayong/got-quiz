import React, { Component } from 'react';
import '../Results/Results.css';


class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        const q = this.props.currentQ;
        return (
            <div className="results">
                <h1>Results Page</h1>
                <h4>Try again?</h4>
            </div>
        )
    }
}

export default Results;