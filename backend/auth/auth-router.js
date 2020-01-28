const router = require('express').Router();
const bcrypt = require('bcrypt');
const generateToken = require('../token/generateToken');
const db = require('../database/dbConfig');

router.post('/register', async (req, res, next) => {
  try {
    let user = req.body;
    const hashPw = await bcrypt.hash(user.password, 12);
    user.password = hashPw;

    const [id] = await db('users').insert(user);
    const newUser = await db('users').where({ id }).select('id', 'username').first();
    return res.status(201).json(newUser)
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await db('users').where({ username }).first();
    const verifyPw = await bcrypt.compare(password, user.password)

    if (user && verifyPw) {
      const token = generateToken(user);
      return res.status(200).json({
        message: `Welcome ${user.username}!`,
        token
      });

    } else {
      return res.status(401).json({
        message: "Invalid Credentials Foo!!"
      })
    }
  } catch (error) {
    next(error)
  }
});

module.exports = router;
