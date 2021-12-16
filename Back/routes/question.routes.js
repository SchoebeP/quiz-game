const express = require('express');
const router = express.Router();
const QuestionsController = require('../controllers/question');

// views
router.get('/', QuestionsController.findQuestions);
router.get('/:id', QuestionsController.findQuestion);

// actions
router.post('/create', QuestionsController.create);
router.put('/:id/update', QuestionsController.update);
router.delete('/:id/delete', QuestionsController.delete);

module.exports = router;