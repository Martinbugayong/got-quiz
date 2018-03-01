const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema ({
    question: String,
    answers: String,
})

module.exports