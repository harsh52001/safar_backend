const route = require('express').Router();
const vehickeController = require('../controller/vehicleController');

route.post('/register', vehickeController.register_post);

module.exports = route;
