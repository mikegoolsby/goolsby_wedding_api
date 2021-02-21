const express = require('express')
const rsvps = express.Router()
const RSVP = require('../models/rsvp.js')

//Index

rsvps.get('/', (req, res) => {
    RSVP.find({}, (err, foundRsvp) => {
        if(err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(foundRsvp)
    })
})

// Delete

rsvps.delete('/:id', (req, res) => {
    RSVP.findByIdAndRemove(req.params.id, (err, deletedRsvp) => {
        if (err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(deletedRsvp)
    })
})

// Update

rsvps.put('/:id', (req, res) => {
    RSVP.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRsvp) => {
        if (err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(updatedRsvp)
    })
})

// Create

rsvps.post('/', (req, res) => {
    RSVP.create(req.body, (err, createdRsvp) => {
        if (err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(createdRsvp)
    })
}) 

module.exports = rsvps;