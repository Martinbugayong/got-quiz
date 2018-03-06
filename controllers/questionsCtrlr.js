var Question = require('../models/quiz');

function getAllQuestions(req, res) {
    Question.find({})
            .then((questions) => res.json(questions).status(200))
            .catch(err => console.log(err));
}

module.exports = {
    getAllQuestions
}