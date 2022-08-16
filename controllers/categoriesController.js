const { categoriesService } = require('../services');

const postCategories = async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await categoriesService.post(name);
    if (result.code) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getCategories = async (_req, res, next) => {
  try {
    const result = await categoriesService.getAll();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postCategories,
  getCategories,
};
