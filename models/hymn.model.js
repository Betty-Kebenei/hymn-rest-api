const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HymnSchema = new Schema({
    name: {type: String, required: true},
    stanzas: {type: String, required: true}
});

module.exports = momgoose.model('Hymn', HymnSchema)