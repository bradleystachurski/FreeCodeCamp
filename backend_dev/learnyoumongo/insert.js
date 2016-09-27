var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

var firstName = process.argv[2];
var lastName = process.argv[3];

var jsonDocument = {
    firstName: firstName,
    lastName: lastName
};

mongo.connect(url, function(err, db) {
    var collection = db.collection('docs');
    collection.insert(jsonDocument, function(err, data) {
        consoe.log(JSON.stringify(jsonDocument))
    };
    db.close()
});