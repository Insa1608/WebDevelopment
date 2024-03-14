const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const database = require('./database');
const bodyParser = require('body-parser');
const postAPI = require('./routes/post.route')
const app = express()

//connect mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(database.db).then(() => {
    console.log("Database connected")
},
error => {
    console.log("Database could not be connected to: " + error)
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//API
app.use('/api', postAPI)

//create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

//error handler
app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});