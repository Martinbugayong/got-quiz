import React from 'react';

const Quiz = (props) => {
    const q = props.questions[props.currentQ];
    return (
        <div>
            <div>
                <h1>{q.question}</h1>
                <div>
                    {q.choices.map((choice, index) => {
                        return (
                            <li 
                                key={index}
                                onClick={() => {
                                    const correct = choice === q.answer
                                    props.onAnswer(correct)
                                }}
                            >
                                {choice}
                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Quiz;