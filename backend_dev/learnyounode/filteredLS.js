var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, files) {
    if (err) throw err;

    for(var i = 0; i < files.length; i++) {
        currentPath = path.extname(files[i]);
        if ('.' + process.argv[3] == currentPath) {
            console.log(files[i]);
        }
    }
});