const express = require('express');
const { logincontroller } = require('../controllers');

const login = express.Router();

login.post('/', logincontroller.login);

module.exports = login;
