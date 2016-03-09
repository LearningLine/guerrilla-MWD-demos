// core modules
var path = require('path');

// npm packages
var express = require('express');
var bodyParser = require('body-parser');

// local modules
var dataService = require('./data-service');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/angular')));
app.use(express.static(path.join(__dirname, 'node_modules/angular-resource')));

app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
    // res.sendfile(path.join(__dirname, 'index.html'));
    res.render('home', {
        renderTime: new Date()
    });
});

// app.get('/angular.js', function(req, res, next) {
//     res.sendfile(path.join(__dirname, 'angular.js'));
// });

app.get('/api/getData', function(req, res, next) {
    dataService.getData(function(err, data) {
        if (err) {
            res.sendStatus(500);
        } else {
            res.json(data);
        }
    })
});

app.post('/api/submitData', bodyParser.json(), function(req, res, next) {
    console.log(req.body);
    res.send('ok');
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('http://localhost:%d/', port);
});
