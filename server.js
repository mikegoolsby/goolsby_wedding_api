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

app.get('/', (req, res) => {
    res.send('navigate to /rsvp to see current list')
})

app.listen(process.env.PORT || 3001, () => {
    console.log("Server is up")
})