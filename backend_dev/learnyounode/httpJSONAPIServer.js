var http = require('http');
var url = require('url');

/*http.createServer(function(request, response) {
    if (request.method == "GET") {
        console.log("we're in!");
        var body = [];
        request.on('data', function(chunk) {
            console.log(url.parse(request.url,true));
            body.push(chunk)
        }).on('end', function() {
            body = Buffer.concat(body).toString().toUpperCase();
            response.end(body);
        })
    } else {
        console.log("didn't work");
        response.statusCode = 404;
        response.end();
    }
}).listen(process.argv[2]);*/

http.createServer(function(request, response) {
    var urlResponse = url.parse(request.url,true);
    var time = urlResponse.query;
    var isoTime = new Date(time.iso);
    var unixTime = new Date(time.iso);
    unixTime = unixTime.getTime();

    var hour = isoTime.getHours();
    var minute = isoTime.getMinutes();
    var second = isoTime.getSeconds();

    var isoTimeObject = {
        "hour": hour,
        "minute": minute,
        "second": second
    };

    var unixTimeObject = {
        "unixtime": unixTime
    };

    var unixJSON = JSON.stringify(unixTimeObject);

    var isoJSON = JSON.stringify(isoTimeObject);


    // Endpoint logic
    if (urlResponse.pathname == '/api/parsetime') {
        response.end(isoJSON);
    } else {
        response.end(unixJSON)
    }
}).listen(process.argv[2]);
