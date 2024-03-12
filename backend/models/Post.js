const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    city: {
        type: String
    }
},{
    collection: 'addemployees'
})

module.exports= mongoose.model('Post', postSchema)