const { User } = require('../database/models');

const userVerifier = async (email) => User.findOne({ where: { email } });

const post = async (displayName, email, password, image) => {
  await User.create({
    displayName, email, password, image,
  });
};

const getAll = async () => User.findAll({
  attributes: {
    exclude: ['password'],
  },
});

const userById = async (id) => User.findByPk(id, {
  attributes: {
    exclude: ['password'],
  },
});

const getIdFromEmail = async (userEmail) => {
  const { dataValues: { id } } = await User.findOne({ where: { email: userEmail } });
  return id;
};

const deleteMe = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  userVerifier,
  post,
  getAll,
  userById,
  getIdFromEmail,
  deleteMe,
};
