var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];

var id = process.argv[4];

mongo.connect(url, function(err, db) {
    var collection = db.collection(process.argv[3]);
    collection.remove({
        _id: id
    });
    db.close();
})