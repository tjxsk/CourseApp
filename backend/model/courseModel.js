const mongoose = require('mongoose');
// creating schema
const courseSchema = mongoose.Schema({
    id: Number,
    name: String,
    category: String,
    description: String,
    duration: String,
    price: String,
    image: String
});
// creating model
const courseModel = mongoose.model('coursedetail',courseSchema );  // (collectionName,SchemaName)



module.exports = courseModel;