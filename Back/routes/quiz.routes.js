const express = require('express');
const router = express.Router();
const QuizController = require('../controllers/quiz');
const jwt = require('../middleware/jwt')

// views
router.get('/', QuizController.findQuizzes);
router.get('/:id', QuizController.findQuiz);

// actions
router.post('/create',jwt.checkJWT, QuizController.create);
router.put('/:id/update',jwt.checkJWT, QuizController.update);
router.delete('/:id/delete',jwt.checkJWT, QuizController.delete);

// submit results
router.post('/:id/submit-results', jwt.checkJWT, QuizController.submitResults);

module.exports = router;