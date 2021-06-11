const mongoose = require('mongoose')
const Heart = mongoose.model("HEART")

exports.leta = (req,res)=>{
    const {heartbeat,temperature,location} = req.params
    const heart = new Heart()
    heart.heartbeat = heartbeat;
    heart.temperature = temperature;
    heart.location = location;
    heart.save((err,docs)=>{
        if(!err){
            res.send("SUCCESS")
        }
    })
}

exports.pata = (req,res)=>{
    Heart.find((err,docs)=>{
        if (!err){
            res.json(docs)
        }
    })
}