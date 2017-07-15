var mongoose = require('mongoose');

var MongooseSchema = new mongoose.Schema({
    name: { type: String }
});

mongoose.model('Mongoose', MongooseSchema);
