const express = require('express');
const { auth } = require('../middlewares/authMiddleware');
const { postController } = require('../controllers');

const post = express.Router();

post.post('/', auth, postController.post);
post.get('/', auth, postController.getPosts);
post.get('/search', auth, postController.postbyQuery);
post.get('/:id', auth, postController.postById);
post.put('/:id', auth, postController.putPost);
post.delete('/:id', auth, postController.deletePost);

module.exports = post;
