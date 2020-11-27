const assert = require('assert');



exports.insertDocument1 = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insert(document, (err, result) => {
        assert.equal(err, null);
        //the result object has a property n, which n is the number of document has been inserted
        console.log("Inserted " + result.result.n + " documents into the collection " + collection);
        callback(result);
    });
};

exports.findDocument1 = (db, collection, callback) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        //return all the documents in an Array.
        callback(docs);
    });
};

exports.removeDocument1 = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document, (err, result) => {
        assert.equal(err, null);
        //use comma because document is a javascript object
        console.log("Removed the document ", document);
        callback(result);
    });

};

exports.updateDocument1 = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    //the second parameter is the field to be update: the update information
    coll.updateOne(document, { $set: update}, null,  (err, result) => {
        assert.equal(err, null);
        console.log("Updated the document with", update);
        callback(result);

    });

};