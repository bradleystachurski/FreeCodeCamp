var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, function(err, db) {
    var collection = db.collection('users');
    collection.update(
        {name: "Tina"},
        {
            $set: {
                age: 40
            }
        }
    );
    console.log("fuck you, you poorly written tutorial. learn some fucking english");
    db.close()
});