const express = require('express');
const { auth } = require('../middlewares/authMiddleware');
const { userController } = require('../controllers');

const user = express.Router();

user.post('/', userController.postUser);
user.get('/', auth, userController.allUsers);
user.get('/:id', auth, userController.userById);
user.delete('/me', auth, userController.deleteMe);

module.exports = user;
