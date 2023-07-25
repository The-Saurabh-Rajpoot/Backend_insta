const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set(`strictQuery`, true)
async function getConnection() {
    const uri = process.env.MONGO_URL
    await mongoose.connect(uri, (err)=>{
        if(err){
            console.log("Connection to mongoDB failed");
        }
        else{
            console.log("Connected to MongoDB successfully");
        }
    })
}
module.exports = getConnection