const express = require('express')
const list = express.Router()
const guestList = require('../models/rsvp.js')

//Index

list.get('/', (req, res) => {
    guestList.find({}, (err, foundResi) => {
        if(err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(foundResi)
    })
})

// Delete

list.delete('/:id', (req, res) => {
    guestList.findByIdAndRemove(req.params.id, (err, deletedResi) => {
        if (err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(deletedResi)
    })
})

// Update

list.put('/:id', (req, res) => {
    guestList.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedResi) => {
        if (err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(updatedResi)
    })
})

// Create

list.post('/', (req, res) => {
    guestList.create(req.body, (err, createdResi) => {
        if (err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(createdResi)
    })
}) 

module.exports = list;