'use strict';

const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  transaction = require('./api/transactionModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo/transactionsdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log(req.method + ' ' + req.originalUrl);
  next();
});

const routes = require('./api/transactionRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Transactions microserivce RESTful API server started on: ' + port);
