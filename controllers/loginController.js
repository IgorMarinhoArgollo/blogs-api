const jwt = require('jsonwebtoken');
const { loginService } = require('../services');
require('dotenv').config();

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await loginService.login(email, password);
    if (!result.code) {
      return res.status(200).json({
        token: `Bearer ${jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' })}`,
      });
    }
    return res.status(result.code).json({ message: result.message });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
