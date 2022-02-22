const mongoose = require('mongoose')
const { MongoClient } = require('mongodb');

const dotenv = require('dotenv');

dotenv.config()

const connectDB = async() => {

    const uri = process.env.MONGO_URL
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // const conn = await mongoose.connect('mongodb+srv://Gabkings:rread@123@bootcampsapp.yawx2.mongodb.net/DevCamper?retryWrites=true&w=majority', {
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false,
    //     useUnifiedTopology: true
    // });
    console.log(`Database Connected  hosted by ${client.db().databaseName}`)
}

module.exports = connectDB;





// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });