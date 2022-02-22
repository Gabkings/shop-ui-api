const express = require('express')
const app = express()
const mongoose = require('mongoose')

const dotenv = require('dotenv')

dotenv.config()

const db = require('./config/db')

db()


app.use(express.json())

app.listen(process.env.PORT || 4000, () => console.log("Server running at port : " +
    process.env.PORT))