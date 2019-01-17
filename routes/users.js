var express = require('express');
var router = express.Router();

const userController = require('../controller/user');

/* GET users listing. */
router.get('/', userController.getUsers);

/* POST add user. */
router.post('/add', userController.insertUser);

/* GET user profile. */
router.get('/profile/:user_id', userController.showUserProfile);

module.exports = router;
