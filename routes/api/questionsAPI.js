var express = require('express');
var router = express.Router();
var questionsCtrlr = require('../../controllers/questionsCtrlr');

router.get('/questions', questionsCtrlr.getAllQuestions);

module.exports = router;