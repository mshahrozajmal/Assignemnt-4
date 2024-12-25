const express = require('express');
const { createUser, getUsers, loginUser } = require('../controllers/userController');

const router = express.Router();

router.post('/', createUser); // POST /api/users
router.get('/', getUsers);   // GET /api/users
router.post('/loginUser', loginUser); // POST /api/users


module.exports = router;
