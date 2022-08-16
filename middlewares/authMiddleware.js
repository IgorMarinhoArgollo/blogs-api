const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const token = authorization.split(' ');
      const decoded = jwt.verify(token[1], process.env.JWT_SECRET);
      const decodedEmail = decoded.email;

      req.email = decodedEmail;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  auth,
};
