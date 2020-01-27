const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = {
    subject: user.id,
    username: user.username
  }

  const options = {
    expiresIn: '1d', // show other available options in the library's documentation
  };

  const secret = "something secret goes here"

  return jwt.sign(payload, secret, options);
}

module.exports = generateToken;