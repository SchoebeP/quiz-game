const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category');

// views
router.get('/', CategoryController.findCategories);
router.get('/:id', CategoryController.findCategory);

// actions
router.post('/create', CategoryController.create);
router.put('/:id/update', CategoryController.update);
router.delete('/:id/delete', CategoryController.delete);

module.exports = router;