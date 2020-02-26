require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')

const app = express();

const routes =  require('../routes/index')

mongoose.connect('mongodb+srv://admin:admin@cluster0-0ccji.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(routes)

module.exports = app;