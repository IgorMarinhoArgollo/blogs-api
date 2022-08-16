const { postService } = require('../services');

const post = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { authorization } = req.headers;
    const result = await postService.post(title, content, categoryIds, authorization);
    if (result) {
      return res.status(201).json(result);
    }
    return res.status(result.code).json({ message: result.message });
  } catch (error) {
    next(error);
  }
};

const getPosts = async (_req, res, next) => {
  try {
    const result = await postService.getAll();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const postById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await postService.postById(id);
    if (result.code) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const putPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const result = await postService.putPost(id, title, content);
    if (result.code) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    const result = await postService.deletePost(id, authorization);
    if (result) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const postbyQuery = async (req, res, next) => {
  try {
    const { q } = req.query;
    const posts = await postService.postByQuery(q);
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  post,
  getPosts,
  postById,
  putPost,
  deletePost,
  postbyQuery,
};
