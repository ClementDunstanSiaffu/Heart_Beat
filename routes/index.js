const mongoose = require('mongoose')
const Heart = mongoose.model("HEART")

exports.leta = (req,res)=>{
    const {heartbeat,temperature,location} = req.params
    const heart = new Heart()
    const date = new Date()
    const currentDate = date.toLocaleDateString("en-us",{timeZone:"Africa/Nairobi"})
    const currentTime = date.toLocaleTimeString("en-us",{timeZone:"Africa/Nairobi"})
    heart.heartbeat = heartbeat;
    heart.temperature = temperature;
    heart.location = location;
    heart.date = currentDate;
    heart.time = currentTime;
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