var express = require('express');
var url = require('url');
var crypto = require('crypto');
var app = express();

app.param('id', function(req, res, next, id) {
    req.id = id;

    next()
});

app.put('/message/:id', function(req, res) {
    var str = crypto.createHash('sha1').update(new Date().toDateString() + req.id)
        .digest('hex');
    res.send(str);
});

app.listen(process.argv[2]);