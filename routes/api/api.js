var express = require('express');
var router = express.Router();
var quizApi = require('../../controllers/quizApi');

router.get('/questions', quizApi.getAllQuestions);

module.exports = router;