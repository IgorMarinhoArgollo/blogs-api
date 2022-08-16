const { Category, PostCategory } = require('../database/models');

const post = async (name) => {
  const result = await Category.create(name);
  return result;
};

const getAll = async () => Category.findAll();

const categoriesById = async (id) => Category.findAll();

const validateCategories = async (categoriesIds) => {
  const result = await Promise.all(
    categoriesIds.map(async (e) => {
      const category = await Category.findByPk(e);
      if (!category) {
        return { code: 400, message: 'Invalid Field' };
      }
    }),
  );
};

const postCategories = async (categories, id) => {
  const result = await Promise.all(
    categories.map(async (e) => {
      await PostCategory.create({ postId: id, categoryId: e });
    }),
  );
};

module.exports = {
  post,
  getAll,
  categoriesById,
  validateCategories,
  postCategories,
};
