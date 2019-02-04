let mongoose = require('mongoose');

// Create a model class
let contactSchema = mongoose.Schema({
    name: String,
    description: String
},
{
    collection: "favouritethings"
});

module.exports = mongoose.model('Dinesh', contactSchema);