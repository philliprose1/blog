const mongoose = require('mongoose');
const Schema = mongoose.Schema; //a schema defines the structure of the documents stored in a collection, model wraps around the schema
//constructor function 

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
   snippet: {
    type: String,
    required: true

    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true })    // the model will be based on this Schema

const Blog = mongoose.model('Blog', blogSchema); // Blog is the sigular form of the collection name blogs

module.exports = Blog; // export to use this model in the project...