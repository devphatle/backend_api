var express = require('express');
var router = express.Router();
var jwt  = require("jsonwebtoken");
var configDb = require('./database/config');
var userController = require('./api/controllers/userController');

router.post('/register', userController.create);
module.exports = router;