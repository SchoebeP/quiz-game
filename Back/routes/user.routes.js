const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');
const jwt = require('../middleware/jwt')


// views
router.get('/',jwt.checkJWT,  UsersController.getAll);
router.get('/:id',jwt.checkJWT, UsersController.getById);
router.get('/current', UsersController.getCurrent);

// actions
router.post('/authenticate', UsersController.authenticate);
router.post('/register', UsersController.register);
router.put('/:id',jwt.checkJWT, UsersController.update);
router.delete('/:id',jwt.checkJWT, UsersController.delete);

module.exports = router;