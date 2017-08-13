// ---------- server.js -------------

// get all tools you need

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

// configure connect

var port = process.env.port || 3030; // create port for application
var dbConfig = require('./database/config'); // include model database
mongoose.connect(dbConfig.url);

// setup application

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
app.use(morgan("dev")); // log all request

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});


var routes = require('./routes');
app.use('/', routes);

process.on('uncaughtException', function(err) {
    console.log(err);
});

// Start Server
app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});