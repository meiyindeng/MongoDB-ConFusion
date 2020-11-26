const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//recall the url for the mongodb is localhost:27017
const url = 'mongodb://localhost:27017/';
//match the name of the mongodb server created is conFusion
const dbname = 'conFusion';

//connect to the MongoDB server
MongoClient.connect(url, (err, client) => {

    //the assert function allow us to check if the error is null
    assert.equal(err, null);

    console.log('Connected correctly to server');

    //db is the MongoDB client connects the conFusion server
    const db = client.db(dbname);

    //collection provides all the data from the 'dishes' database
    const collection = db.collection('dishes');

    /* To insert one dish object:
    The insertOne function takes the parameter of the object and a callback function.
    The  callback function takes in an err and the result as parameter
    Use assert to make sure the error is not null
    Then, log the ops property shows how many operation just carry out successfully*/
    collection.insertOne( { "name": "uthappizza", "description": "test"}, (err, result) => {

        assert.equal(err, null);
        console.log('After Insert: \n');
        console.log(result.ops);

        //To find all the documents in the collection, and process them into an array
        //print out the documents
        collection.find( {} ).toArray( (err, docs) => {
                assert.equal(err, null);
                console.log('Found: \n');
                console.log(docs);

                //drop the specified collection, remove the dishes collection from the database
                db.dropCollection('dishes', (err, result) => {
                        assert.equal(err, null);
                        client.close();
                        
                });
        });
    });
});