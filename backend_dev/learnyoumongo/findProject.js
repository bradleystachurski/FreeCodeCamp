var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var age = parseInt(process.argv[2]);

mongo.connect(url, function(err, db) {
    db.collection('parrots').find(
        {
            age: { $gt: age }
        },
        {
            _id : 0
        }
    ).toArray(function(err, docs) {
            console.log(docs);
        });
    db.close();
});