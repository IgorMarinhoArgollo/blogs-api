const express = require('express');
const { auth } = require('../middlewares/authMiddleware');
const { categoriesController } = require('../controllers');

const categoriesRouter = express.Router();

categoriesRouter.post('/', auth, categoriesController.postCategories);
categoriesRouter.get('/', auth, categoriesController.getCategories);

module.exports = categoriesRouter;
