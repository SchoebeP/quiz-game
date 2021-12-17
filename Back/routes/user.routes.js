const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');
const ResultController = require('../controllers/result');

// views
router.get('/', UsersController.getAll);
//router.get('/:id', UsersController.getById);
router.get('/my-results', ResultController.getResults);

// actions
router.post('/authenticate', UsersController.authenticate);
router.post('/register', UsersController.register);
router.put('/:id',jwt.checkJWT, UsersController.update);
router.delete('/:id',jwt.checkJWT, UsersController.delete);

module.exports = router;