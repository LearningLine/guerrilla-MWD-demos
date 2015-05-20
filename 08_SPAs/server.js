var path = require('path');

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var db = require('./db');

var app = express();

app.use(morgan('dev'));

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/api/people', function(req, res) {
    res.json(db);
});

app.get('/api/people/:id', function(req, res) {
    var person = db.filter(function(p) { return p.id === +req.params.id; })[0];

    res.json(person);
});

app.post('/api/people', bodyParser.json(), function(req, res) {
    db.push(req.body);

    fs.writeFile(path.resolve(__dirname, 'db.json'), JSON.stringify(db, null, 2), 'utf8', function(err) {
        if (err) {
            next(err);
        } else {
            res.status(201).end();
        }
    });
});

app.all('/api/*', function(req, res) {
    res.status(404).send('Not Found').end();
});

app.all('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

var port = process.env.PORT | 8080;

app.listen(port, function() {
    console.log('listening at http://localhost:%d', port);
});
