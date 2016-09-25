var http = require('http');

http.createServer(function(request, response) {
    if (request.method == "POST") {
        var body = [];
        request.on('data', function(chunk) {
            body.push(chunk)
        }).on('end', function() {
            body = Buffer.concat(body).toString().toUpperCase();
            response.end(body);
        })
    } else {
        response.statusCode = 404;
        response.end();
    }
}).listen(process.argv[2]);