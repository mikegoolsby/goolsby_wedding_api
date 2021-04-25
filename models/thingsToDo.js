const mongoose = require('mongoose')

const toDoSchema = mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    url: {type: String, required: true},
    fun_type: {type: String, required: true}
})

module.exports = mongoose.model('ToDo', toDoSchema)