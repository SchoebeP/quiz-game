const express = require('express');
const router = express.Router();
const QuizzController = require('../controllers/question');

// views
router.get('/', QuizzController.findQuestions);
router.get('/:id', QuizzController.findQuestion);

// actions
router.post('/create', QuizzController.create);
router.put('/:id/update', QuizzController.update);
router.delete('/:id/delete', QuizzController.delete);

module.exports = router;