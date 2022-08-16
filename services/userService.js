const jwt = require('jsonwebtoken');
const { userModel } = require('../models');
const getUserByToken = require('../helpers/userByToken');

const userVerifier = async (displayName, email, password, image) => {
  if (!displayName || displayName.length < 3 || !email.match(/\S@\S+.com/) || !password || password.length < 6 || !image) {
    return { code: 400, message: 'Invalid Field' };
  }
  if (await userModel.userVerifier(email)) {
    return { code: 409, message: 'User already registered' };
  }
  return {};
};

const post = async (displayName, email, password, image) => {
  const result = await userVerifier(displayName, email, password, image);
  if (result.code) {
    return { code: result.code, message: result.message };
  }

  await userModel.post(displayName, email, password, image);
  const token = { token: jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' }) };
  return token;
};

const getAll = async () => userModel.getAll();

const userById = async (id) => {
  const userId = await userModel.userById(id);
  if (!userId) {
    return { code: 404, message: 'User does not exist' };
  }
  return userId;
};

const deleteMe = async (authorization) => {
  const email = await getUserByToken(authorization);
  const userId = await userModel.getIdFromEmail(email);
  await userModel.deleteMe(userId);
};

module.exports = {
  post,
  userVerifier,
  getAll,
  userById,
  deleteMe,
};
