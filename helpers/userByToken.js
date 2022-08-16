const jwt = require('jsonwebtoken');

const getUserByToken = async (auth) => {
  const token = auth.split(' ');
  const data = jwt.verify(token[1], process.env.JWT_SECRET);
  return data.email;
};

module.exports = getUserByToken;
