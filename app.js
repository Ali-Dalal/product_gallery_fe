const express = require('express');
const morgan = require('morgan');
const WebRoutes = require('./routes/web');

const app = express();

app.use(express.static('public'));
app.use(morgan('short'));
app.set('view engine', 'pug');

app.use('/', WebRoutes);

module.exports = app;