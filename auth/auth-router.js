const router = require('express').Router();
const bcrypt = require('bcrypt');
const generateToken = require('../token/generateToken');
const db = require('../database/dbConfig');

router.post('/register', async (req, res) => {
  try {
    let user = req.body;
    const hashPw = await bcrypt.hash(user.password, 12);
    user.password = hashPw;

    const newUser = await db('users').insert(user);
    return res.status(201).json(newUser)
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
