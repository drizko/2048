var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});
