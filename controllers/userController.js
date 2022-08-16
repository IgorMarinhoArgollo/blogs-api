const { userService } = require('../services');
require('dotenv').config();

const postUser = async (req, res, next) => {
  try {
    const {
      displayName, email, password, image,
    } = req.body;
    const result = await userService.post(displayName, email, password, image);
    if (result.code) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(201).json({ token: result.token });
  } catch (error) {
    next(error);
  }
};

const allUsers = async (_req, res, next) => {
  try {
    const all = await userService.getAll();
    return res.status(200).json(all);
  } catch (error) {
    next(error);
  }
};

const userById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = await userService.userById(id);
    if (userId.code) {
      return res.status(userId.code).json({ message: userId.message });
    }
    return res.status(200).json(userId);
  } catch (error) {
    next(error);
  }
};

const deleteMe = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const result = await userService.deleteMe(authorization);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postUser,
  allUsers,
  userById,
  deleteMe,
};
