const { User } = require('../database/models/index');

const login = async (email, password) => {
  const found = await User.findOne({ where: { email, password } });
  return found;
};

module.exports = {
  login,
};
