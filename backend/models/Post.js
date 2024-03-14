const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
    },{
    collection: 'employees'
});

module.exports = mongoose.model('Post', postSchema)
