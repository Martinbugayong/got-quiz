import React from 'react';
import '../Quiz/Quiz.css';

const Quiz = (props) => {
    const q = props.questions[props.currentQ];
    return (
        <div className="quiz">
            <div>
                <h1>{q.question}</h1>
                <div>
                    {q.choices.map((choice, index) => {
                        return (
                            <h3>
                                <li 
                                    key={index}
                                    onClick={() => {
                                        const correct = choice === q.answer
                                        props.onAnswer(correct)
                                    }}
                                >
                                    {choice}
                            </li>
                            </h3>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Quiz;