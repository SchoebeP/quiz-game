const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');


// views
router.get('/', UsersController.getAll);
router.get('/:id', UsersController.getById);
router.get('/current', UsersController.getCurrent);

// actions
router.post('/authenticate', UsersController.authenticate);
router.post('/register', UsersController.register);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.delete);

module.exports = router;