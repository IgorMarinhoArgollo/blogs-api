const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const decoded = jwt.verify(authorization, process.env.JWT_SECRET);
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
