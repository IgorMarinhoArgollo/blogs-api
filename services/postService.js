const { postModel, categoriesModel, userModel } = require('../models');
const getUserByToken = require('../helpers/userByToken');

const post = async (title, content, categoryIds, authorization) => {
  if (!title || !content || categoryIds.length <= 0) {
    return { code: 400, message: 'Invalid Fields' };
  }
  const validation = await categoriesModel.validateCategories(categoryIds);
  if (validation !== undefined) {
    return { code: validation.code, message: validation.message };
  }
  const email = await getUserByToken(authorization);
  const id = await userModel.getIdFromEmail(email);
  const postItem = await postModel.post(title, content, categoryIds, id);
  const categories = await categoriesModel.postCategories(categoryIds, postItem.id);
  return postItem;
};

const getAll = async () => postModel.getAll();

const postById = async (id) => {
  const result = await postModel.postById(id);
  if (!result) {
    return { code: 404, message: 'Post does not exist' };
  }
  return result;
};

const putPost = async (id, title, content) => {
  if (!title || !content) {
    return { code: 400, message: 'Invalid Field' };
  }
  let result = await postModel.postById(id);
  if (!result) {
    return { code: 404, message: 'Post does not exist' };
  }
  result = await postModel.putPost(id, title, content);
  return result;
};

const deletePost = async (id, authorization) => {
  const result = await postModel.postById(id);
  if (!result) {
    return { code: 404, message: 'Post does not exist' };
  }
  const email = await getUserByToken(authorization);
  const userId = await userModel.getIdFromEmail(email);
  if (userId !== result.user.id) {
    return { code: 401, message: 'Unauthorized User' };
  }
  await postModel.deletePost(id);
};

const postByQuery = async (q) => {
  const posts = await postModel.postByQuery(q);
  return posts;
};

module.exports = {
  post,
  getAll,
  postById,
  putPost,
  deletePost,
  postByQuery,
};
