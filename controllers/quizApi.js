var Question = require('../models/quiz');

function getAllQuestions(req, res) {
    Question.find({}, function(err, question) {
        res.status(200).json(question);
    });
}

module.exports = {
    getAllQuestions
}