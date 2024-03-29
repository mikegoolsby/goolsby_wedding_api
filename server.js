require('dotenv').config();
const { PORT = 3001, NODE_ENV = 'development' } = process.env;
const express = require('express')
const app = express();

// Mongo connect
const mongoose = require('./DB/conn')
body = require('body-parser')
const cors = require('cors')
NODE_ENV === "product" ? app.use(cors()) : app.use(cors())
app.use(cors())

app.use(body.urlencoded({ extended: false }))
app.use(body.json())

// Controllers
const rsvpController = require('./controllers/rsvp.js');
app.use('/rsvp', rsvpController)

const guestListController = require('./controllers/guestList')
app.use('/guestlist', guestListController)

const thingsToDoController = require('./controllers/thingsToDo')
app.use('/thingstodo', thingsToDoController)

const photosController = require('./controllers/photos')
app.use('/photos', photosController)

app.get('/', (req, res) => {
    res.send('navigate to /guestlist to see current data')
})

app.listen(process.env.PORT || 3001, () => {
    console.log("Server is up")
})