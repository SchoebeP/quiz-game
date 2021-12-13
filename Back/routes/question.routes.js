const express = require('express');
const router = express.Router();
const QuizzController = require('../controllers/category');

// views
router.get('/', QuizzController.findCategories);
router.get('/:id', QuizzController.findCategory);

// actions
router.post('/create', QuizzController.create);
router.put('/:id/update', QuizzController.update);
router.delete('/:id/delete', QuizzController.delete);

module.exports = router;