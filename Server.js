const express = require('express')
const body_parser=require('body-parser')
var app=express();


const port=1234;

const adminRouter = require('./Route/adminRouter')

app.use(body_parser.json())

app.use(express.json())

const mongoose = require('mongoose');

const db = mongoose.connection;

//connect to the localhost bookstoredb collection
mongoose.connect('mongodb://localhost:27017/Assignment03');

db.once('open',()=>{
    console.log(`Database Connected`);
})

app.use('/admin', adminRouter)


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})

