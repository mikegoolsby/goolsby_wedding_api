const mongoose = require('mongoose')

const rsvpSchema = mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    attending: {type: Boolean, required: true},
    food: {type: String, required: true},
    song: String
})

module.exports = mongoose.model('RSVP', rsvpSchema)