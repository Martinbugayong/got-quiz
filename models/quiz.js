const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema ({
    question: String,
    choices: [String],
    answer: String,
})

module.exports = mongoose.model('Question', quizSchema);