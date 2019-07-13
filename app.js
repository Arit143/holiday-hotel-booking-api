const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressSanitizer = require('express-sanitizer');

const hotelsRouter = require('./routes/hotels');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSanitizer());

app.use('/hotels', hotelsRouter);

module.exports = app;
