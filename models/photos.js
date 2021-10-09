const mongoose = require('mongoose')

const photoSchema = mongoose.Schema({
    url: {type: String, required: true},
    alt: {type: String, required: true},
    caption: {type: String, required: true}
})

module.exports = mongoose.model('photos', photoSchema)