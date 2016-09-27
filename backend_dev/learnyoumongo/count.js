var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

var gtAge = parseInt(process.argv[2]);

mongo.connect(url, function(err, db) {
    var collection = db.collection('parrots');
    collection.count({
        age: {$gt: gtAge}
    }, function(err, count) {
        console.log(count)
    });
    db.close()
});