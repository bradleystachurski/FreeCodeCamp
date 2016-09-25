var net = require('net');

var listeningPort = process.argv[2];

var server = net.createServer(function(socket) {
    var currentDate = new Date();
    var printedDate = currentDate.getFullYear() + "-" + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "-" +
        ("0" + currentDate.getDate()).slice(-2) + " " + ("0" + currentDate.getHours()).slice(-2) + ":" +
        ("0" + currentDate.getMinutes()).slice(-2) + "\n";
    socket.end(printedDate);
});

server.listen(listeningPort);