const express = require('express');
const app = express();
let port = 5000;
const mongoose = require('mongoose');
const user = require('./api/user');
const mongoUri = require('./config.js').mongouri;
mongoose.connect(mongoUri)
.then((succ)=>{
    console.log(`Connected to the database`)
})
.catch((err)=>{
    console.log("Error connecting to the database")
})

app.use('/api',user)



app.listen(port,()=>{
    console.log(`listening to server on port ${port}`)
})