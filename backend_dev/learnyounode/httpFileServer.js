var http = require('http');
var fs = require('fs');

var listenPort = process.argv[2];
var fileToServer = process.argv[3];

var server = http.createServer(function(request, response) {

    var readStream = fs.createReadStream(fileToServer);

    readStream.on("open", function() {
        readStream.pipe(response);
    });

});

server.listen(listenPort);