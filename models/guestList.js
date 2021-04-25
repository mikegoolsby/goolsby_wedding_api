const mongoose = require('mongoose')

const guestListSchema = mongoose.Schema({
    first_name_root: {type: String, required: true},
    last_name_root: {type: String, required: true},
    attending: {type: Boolean, required: true},
    food: {type: String},
    song: String
})

module.exports = mongoose.model('guestList', guestListSchema)