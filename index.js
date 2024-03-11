const express = require('express');
const mongodb = require('mongodb').MongoClient;
const cors = require('cors');
const multer = require('multer');
const app = express();

app.use(cors());

var CONNECTION_STRING='mongodb+srv://roster_user:D0w1rKmPqq6QYx46@roster.hwic3bh.mongodb.net/?retryWrites=true&w=majority&appName=roster'
var DATABASENAME="roster";
var database;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    mongodb.connect(CONNECTION_STRING,(error,client) =>{
        database=client.db(DATABASENAME);
        console.log("Mongodb Connection was successful")
    })
});

app.post('/api/roster/add',multer().none(), (request, response) => {
    database.collection("addemployees").count({},function(error,numOfDocs){
        database.collection("addemployees").insertOne({
            id:(numOfDocs+1).toString(),
            description:request.body.newNotes
        });
        response.json("Added succesfully");
    })
})

app.delete('/api/roster/deleteemployee',(request, response) => {
    database.collection("addemployees").deleteOne({
        id:request.query.id
    });
    response.json("Delete successfully");
})