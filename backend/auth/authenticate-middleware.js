const jwt = require('jsonwebtoken');

module.exports = () => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, "something secret goes here")

      req.userId = decoded.subject;
      next();
    } catch (error) {
      return res.status(401).json({
        message: "You are not authorized"
      })
    }
  }
};
