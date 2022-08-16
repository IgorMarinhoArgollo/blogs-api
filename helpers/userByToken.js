const jwt = require('jsonwebtoken');

const getUserByToken = async (token) => {
  const data = jwt.verify(token, process.env.JWT_SECRET);
  return data.email;
};

module.exports = getUserByToken;
