var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var api = require('./routes/api');
var signup = require('./routes/auth/signup');
// var login = require('./routes/auth/login');
// var logout = require('./routes/auth/logout');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', api);
app.use('/api/v1', signup);
// app.use('/api/v1', login);
// app.use('/api/v1', logout);

module.exports = app;
