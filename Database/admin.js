const mongoose = require('mongoose')

const adminSchema=new mongoose.Schema({

 name : {
     type :String,

 },
 phone_no : {
     type:Number
 }
   

})

const admin=mongoose.model('admin',adminSchema)

module.exports=admin