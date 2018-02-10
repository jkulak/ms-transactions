'use strict'

const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

app.listen(port);

console.log('Transactions microserivce RESTful API server started on: ' + port);
