var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended: false}));


app.post('/form', function(request, response) {
    var bodyText = request.body.str;
    bodyText = bodyText.split('').reverse().join('');
    response.send(bodyText);
});

app.listen(process.argv[2]);