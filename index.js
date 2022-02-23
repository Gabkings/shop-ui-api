const express = require('express')
const app = express()
const mongoose = require('mongoose')

const dotenv = require('dotenv')

dotenv.config()

const db = require('./config/db')

const Users = require('./routes/User')
const Auth = require('./routes/Auth')
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");
db()


//app middlewares
app.use(cors());
app.use(express.json())


//routes middlewares 
app.use("/api/auth", Auth)
app.use("/api/users", Users)
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 4000, () => console.log("Server running at port : " +
    process.env.PORT))