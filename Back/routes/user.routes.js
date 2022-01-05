const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');
const ResultController = require('../controllers/result');
const jwt = require('../middleware/jwt');

// views

router.get('/my-results/:id', ResultController.getResults);

router.get('/', jwt.checkJWT, UsersController.getAll);
router.get('/:id', UsersController.getById);
/*router.get('/current', UsersController.getCurrent);*/

// actions
router.post('/authenticate', UsersController.authenticate);
router.post('/register', UsersController.register);
router.put('/:id', jwt.checkJWT, UsersController.update);
router.delete('/:id', jwt.checkJWT, UsersController.delete);

module.exports = router;
