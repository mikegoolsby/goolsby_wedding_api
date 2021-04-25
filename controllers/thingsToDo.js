const express = require('express')
const things = express.Router()
const thingsToDo = require('../models/thingsToDo')

//Index

things.get('/', (req, res) => {
    thingsToDo.find({}, (err, foundThings) => {
        if(err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(foundThings)
    })
})

// Delete

things.delete('/:id', (req, res) => {
    thingsToDo.findByIdAndRemove(req.params.id, (err, deletedThings) => {
        if (err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(deletedThings)
    })
})

// Update

things.put('/:id', (req, res) => {
    thingsToDo.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedThings) => {
        if (err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(updatedThings)
    })
})

// Create

things.post('/', (req, res) => {
    thingsToDo.create(req.body, (err, createdThings) => {
        if (err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(createdThings)
    })
}) 

module.exports = things;