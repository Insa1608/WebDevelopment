const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//here the schema of the mongodb is definded
let postSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    postalcode: {
        type: Number
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    holidays: {
        type: String
    },
    position: {
        type: String
    },
    small: {
        type: String
    },
    medium: {
        type: String
    },
    big: {
        type: String
    },
    date: {
        type: Date
    },
    },{
        //the collection of the mongodb is defined here
        collection: 'employees'
    });
//the module is exported for further use in other files
module.exports = mongoose.model('Post', postSchema)
