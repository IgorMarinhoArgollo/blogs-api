const { categoriesModel } = require('../models');

const post = async (name) => {
  if (!name) {
    return { code: 400, message: 'Invalid Field' };
  }
  const result = await categoriesModel.post({ name });
  return result;
};

const getAll = async () => categoriesModel.getAll();

module.exports = {
  post,
  getAll,
};
