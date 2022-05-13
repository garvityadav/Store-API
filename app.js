require('dotenv').config();
const express = require('express');
const { Mongoose, connection } = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const url = process.env.MONGO_URI;
const connectDB =require('./db/connect');

const start= async ()=>{
    await connectDB(url).then(()=>console.log('DB connected'));
    app.listen(port,console.log('server started'));
}

start()