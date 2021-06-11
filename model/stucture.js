const mongoose = require('mongoose')

const heartSchema = mongoose.Schema({
    heartbeat:{
        type:Number
    },
    temperature:{
        type:Number
    },
    location:{
        type:String
    },
})

mongoose.model("HEART",heartSchema)