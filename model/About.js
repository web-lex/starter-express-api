const { default: mongoose } = require("mongoose");

const about = mongoose.Schema({
    data : {
        type: String,
    },
    language: {
        type:String
    },
    currentStatus:{
       type:String
    },
    image1:{
        type: String,
    },
    image2:{
        type: String,
    },
    webdevimage:{
        type: String,
    },
    webdesimage:{
        type: String,
    }
} ,  { versionKey: false })

module.exports = mongoose.model("about" , about)