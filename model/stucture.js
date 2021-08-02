const mongoose = require('mongoose')

const heartSchema = mongoose.Schema({
    id:{
        type:Number
    },
    heartbeat:{
        type:Number
    },
    temperature:{
        type:Number
    },
    location:{
        type:String
    },
    date:{
        type:String
    },
    time:{
        type:String
    }
})

mongoose.model("HEART",heartSchema)