const express = require('express')
const app = express()
const mongoose = require('mongoose')

const dotenv = require('dotenv')

dotenv.config()

const db = require('./config/db')

const Users = require('./routes/User')
const Auth = require('./routes/Auth')

db()


app.use(express.json())

app.use("/api/users", Users)
app.use("/api/auth", Auth)

app.listen(process.env.PORT || 4000, () => console.log("Server running at port : " +
    process.env.PORT))