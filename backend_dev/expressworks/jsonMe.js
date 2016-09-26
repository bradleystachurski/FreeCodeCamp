var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res) {
    fs.readFile(process.argv[3], function(error, data) {
        data = JSON.parse(data);
        res.json(data);
    })
});

app.listen(process.argv[2]);