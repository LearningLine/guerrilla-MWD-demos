// core modules
var path = require('path');

// npm packages
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/angular')));

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('http://localhost:%d/', port);
});
