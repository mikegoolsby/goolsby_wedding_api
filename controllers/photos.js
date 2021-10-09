const express = require('express')
const photo = express.Router()
const photos = require('../models/photos')

//Index

photo.get('/', (req, res) => {
    photos.find({}, (err, foundPhoto) => {
        if(err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(foundPhoto)
    })
})

// Delete

photo.delete('/:id', (req, res) => {
    photos.findByIdAndRemove(req.params.id, (err, deletedPhoto) => {
        if (err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(deletedPhoto)
    })
})

// Update

photo.put('/:id', (req, res) => {
    photos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPhoto) => {
        if (err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(updatedPhoto)
    })
})

// Create

photo.post('/', (req, res) => {
    photos.create(req.body, (err, createdPhoto) => {
        if (err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(createdPhoto)
    })
}) 

module.exports = photo;