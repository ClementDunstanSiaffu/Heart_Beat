const mongoose = require('mongoose')
const Heart = mongoose.model("HEART")

// exports.leta = (req,res)=>{
//     const {heartbeat,temperature,location} = req.params
//     const heart = new Heart()
//     const date = new Date()
//     const currentDate = date.toLocaleDateString("en-us",{timeZone:"Africa/Nairobi"})
//     const currentTime = date.toLocaleTimeString("en-us",{timeZone:"Africa/Nairobi"})
//     heart.heartbeat = heartbeat;
//     heart.temperature = temperature;
//     heart.location = location;
//     heart.date = currentDate;
//     heart.time = currentTime;
//     heart.save((err,docs)=>{
//         if(!err){
//             res.send("SUCCESS")
//         }
//     })
// }

exports.leta = async(req,res)=>{
    const {id,heartbeat,temperature,location}= req.params
    if (parseInt(id) == 1){
        const heart = await Heart.findOne({id:parseInt(id)})
        const docs = await Heart.find((err,docs)=>{return docs})
        const index = docs.findIndex((docs)=>docs.id == parseInt(id))
        const date = new Date()
        const currentDate = date.toLocaleDateString("en-us",{timeZone:"Africa/Nairobi"})
        const currentTime = date.toLocaleTimeString("en-us",{timeZone:"Africa/Nairobi"})
        heart.heartbeat = heartbeat;
        heart.temperature = temperature;
        heart.location = location;
        heart.date = currentDate;
        heart.time = currentTime;
        await Heart.replaceOne(docs[index],heart)
        res.status(200).json("SUCCESS")
    }else{
        res.status(200).json("FAILED")
    }
}

exports.pata = (req,res)=>{
    Heart.find((err,docs)=>{
        if (!err){
            res.json(docs)
        }
    })
}