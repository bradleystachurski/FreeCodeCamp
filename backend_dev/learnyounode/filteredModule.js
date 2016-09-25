var fs = require('fs');
var path = require('path');

var fiterDir = function(dirName, fileExtStr, callback) {
    fs.readdir(dirName, function(err, files) {
        if (err) return callback(err);

        var filteredList = [];
        files.forEach(function(file) {
            if (path.extname(file) == '.' + fileExtStr) {
                filteredList.push(file);
            }
        });
        
        callback(null, filteredList);
    })
};

module.exports = fiterDir;