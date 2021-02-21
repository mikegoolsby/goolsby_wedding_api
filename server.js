require('dotenv').config();
const { PORT = 3001, NODE_ENV = 'development' } = process.env;
const express = require('express')
const app = express();

// Mongo connect
const mongoose = require('./DB/conn')
body = require('body-parser')

app.use(body.urlencoded({ extended: false }))
app.use(body.json())

// Controllers
const rsvpController = require('./controllers/rsvp.js');
app.use('/rsvp', rsvpController)

app.get('/', (req, res) => {
    res.send('Server up!')
})

app.listen(3001, () => {
    console.log("Server is up")
})