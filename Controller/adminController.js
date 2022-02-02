const res = require('express/lib/response');
const adminModel=require('../Database/admin')


exports.adminDetails = (req,res)=>{

    console.log(req.body);
    adminModel.insertMany({
            "name":req.body.name,
            "phone_no":req.body.phone_no
    }).then((result)=>{
        console.log("Data is inserted successully");
        res.send("data inserted")
    }).catch((err)=>{
        console.log(err);
        res.send("Error occurred")
    })
}

exports.getAdmin = (req,res)=>{
     
    adminModel.find({}).then((result)=>{
        if(result.length<1){
            res.status(400).send(result)
        }
        else{
            res.status(200).send(result)

        }
    }).catch((err)=>{
        console.log("Something went wrong");
        res.send(err)
    })
}

exports.getOne = (req,res)=>{
    adminModel.findOne({"name" : req.params.name}).then((result)=>{
        if(result.length < 1){
            res.status(400).send("Not found")
        }
        else{
            res.status(200).send(result)

        }
    }).catch((err)=>{
        res.send(err)
    })
}

exports.postOne = (req,res)=>{
    adminModel.findOne({"name" : req.body.name}).then((result)=>{
        if(result.length<1){
            res.status(400).send("Not found")
        }
        else{
            res.status(200).send(result)

        }
    }).catch((err)=>{
        res.send(err)
    })
}

exports.deleteAdmin = (req,res)=>{
    adminModel.deleteOne({"name":req.body.name}).then((result)=>{
        if(res.send(200)){
            res.send("data deleted")
        }
        else{
            res.send("Not found")
        }
    }).catch((err)=>{
        res.send("Something went wrong")
    })
}

exports.updateAdmin = ()=>{
    const _id=req.params.id
    adminModel.findByIdAndUpdate(_id,req.body).then((result)=>{
        if(res.status(200)){
            res.send("Update done")
        }
        else{
            res.send("Not done")
        }
    }).catch((err)=>{
        res.send("Something went wrong")
    })
}