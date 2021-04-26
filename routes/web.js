const express = require('express');
const CityController = require('../controllers/cities');

const webRoutes = express.Router();

webRoutes.get('/:city_name/:product_name',CityController.getCityAndProductWithRelatedBrochures);

module.exports = webRoutes;