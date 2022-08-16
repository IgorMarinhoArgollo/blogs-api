const { loginModel } = require('../models');

const login = async (email, password) => {
  if (!email || !password || !await loginModel.login(email, password)) {
    return { code: 400, message: 'Invalid Field' };
  }
  return { email, password };
};

module.exports = {
  login,
};
