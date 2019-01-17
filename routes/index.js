var express = require('express');
var router = express.Router();

const homeController = require('../controller/home');

/* GET home page. */
router.get('/', homeController.getIndexPage);

module.exports = router;
