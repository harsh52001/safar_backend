const route = require('express').Router();
const userController = require('../controller/userContoller');

route.post('/register',userController.register_post);
route.post('/login', userController.login_post);


module.exports = route;