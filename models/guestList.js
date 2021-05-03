const mongoose = require('mongoose')

const guestListSchema = mongoose.Schema({
    first_name_root: {type: String, required: true},
    last_name_root: {type: String, required: true},
    attending: {type: Boolean, required: true},
    food: {type: String},
    song: String,
    guest_one: {
        first_name: {type: String},
        last_name: {type: String},
        attending: {type: Boolean},
        food: {type: String}
    },
    guest_two: {
        first_name: {type: String},
        last_name: {type: String},
        attending: {type: Boolean},
        food: {type: String}
    },
    guest_three: {
        first_name: {type: String},
        last_name: {type: String},
        attending: {type: Boolean},
        food: {type: String}
    },
    guest_four: {
        first_name: {type: String},
        last_name: {type: String},
        attending: {type: Boolean},
        food: {type: String}
    }
})

module.exports = mongoose.model('guestList', guestListSchema)