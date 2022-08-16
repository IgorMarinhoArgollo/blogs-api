const { Op } = require('sequelize');

const {
  BlogPost, User, Category, PostCategory,
} = require('../database/models/index');

const post = async (title, content, categories, id) => {
  const result = await BlogPost.create({
    title, content, userId: id, categories, published: Date.now(), updated: Date.now(),
  });
  return result.dataValues;
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return posts;
};

const postById = async (id) => {
  const posts = await BlogPost.findOne({
    where: { id },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return posts;
};

const putPost = async (id, title, content) => {
  await BlogPost.update({ title, content }, { where: { id } });
  const result = await postById(id);
  return result;
};

const deletePost = async (id) => {
  await PostCategory.destroy({ where: { postId: id } });
  await BlogPost.destroy({ where: { id } });
};

const postByQuery = async (q) => {
  const result = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${q}` } },
        { content: { [Op.like]: `%${q}` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return result;
};

module.exports = {
  post,
  getAll,
  postById,
  putPost,
  deletePost,
  postByQuery,
};
