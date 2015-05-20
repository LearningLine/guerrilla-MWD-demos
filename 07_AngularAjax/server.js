// core modules
var path = require('path');
var fs = require('fs');

// npm modules
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// app modules
var db = require('./db');

var app = express();

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// app.use(function(req, res, next) {
//     console.log(req.url);
//     next();
// });

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res) {
    // res.send('hello world!');
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/api/data', function(req, res) {
    // pretend we hit the DB here
    res.json(db);
});

app.post('/api/data', bodyParser.json(), function(req, res) {
    console.log(req.body);
    db.push(req.body);

    fs.writeFile(path.resolve(__dirname, 'db.json'), JSON.stringify(db, null, 2), 'utf8', function(err) {
        if (err) {
            next(err);
        } else {
            res.status(201).end();
        }
    });
});

var port = process.env.PORT || 1337;

app.listen(port, function() {
    console.log('http://localhost:%d', port);
});
