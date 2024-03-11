const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    name: {
        type: String
    },
    city: {
        type: String
    }
},{
    collection: 'addemployees'
})

module.exports= mongoose.model('Post', postSchema)