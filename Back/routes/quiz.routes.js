const express = require('express');
const router = express.Router();
const QuizController = require('../controllers/quiz');

// views
router.get('/', QuizController.findQuizzes);
router.get('/:id', QuizController.findQuiz);

// actions
router.post('/create', QuizController.create);
router.put('/:id/update', QuizController.update);
router.delete('/:id/delete', QuizController.delete);

module.exports = router;