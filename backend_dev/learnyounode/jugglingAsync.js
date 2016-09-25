var http = require('http');
var concatStream = require("concat-stream");

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

http.get(url1, function(response) {
    response.pipe(concatStream(function(data) {
        http.get(url2, function(response) {
            response.pipe(concatStream(function(data) {
                http.get(url3, function(response) {
                    response.pipe(concatStream(function(data) {
                        console.log(data.toString());
                    }))
                });
                console.log(data.toString());
            }))
        });
        console.log(data.toString());
    }));
});

// This is so ugly!

// A much better way:

/*

var http = require('http');
var concatStream = require('concat-stream');

var results = [];
var count = 0;

function printResults() {
    for (var i = 0; i < 3, i++) {
        console.log(results[i]);
    }
}

function httpGet (index) {
    http.get(response.argv[2 + index], function(response) {
        response.pipe(concatStream(function(data) {
            results[index] = data.toString();
            count++;

            if (count == 3) {
                printResults();
            }
        }))
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i);
}
*/
