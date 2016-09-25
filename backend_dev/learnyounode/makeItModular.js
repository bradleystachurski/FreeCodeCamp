var filterList = require('./filteredModule');

var folder = process.argv[2];
var ext = process.argv[3];

filterList(folder, ext, function (err, list) {
    if (err) return console.error(err);

    list.forEach(function(file) {
        console.log(file);
    })

});
