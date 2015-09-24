var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyparser = require('body-parser');
var port = process.env.PORT || 7203;
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var assert = require('assert');
var path = require('path');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.use(express.static(__dirname+'/public'));
app.use(logger('dev'));



app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '/public/index.html'));
});




app.listen(port);
console.log('listening on port'+port+'....');



