const assert = require('assert');

//these 4 functions will return a promise from the mongoDB driver

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    //return the document that includes the newly inserted document
    return coll.insert(document);
};

exports.findDocument = (db, collection, callback) => {
    const coll = db.collection(collection);
    //return a pointer to the result set of query
    //the toArray() iterate the pointer and return the documents in an array
    return coll.find({}).toArray();
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    //returns a document with the status of the operation
    return coll.deleteOne(document); 
    
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    //the second parameter is the field to be update: the update information
    //return a document of the updated document
    return coll.updateOne(document, { $set: update}, null);

};