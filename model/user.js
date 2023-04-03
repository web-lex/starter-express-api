const { default: mongoose } = require("mongoose");

const user = mongoose.Schema({
    username: {
       type: String,
       required: true 
    },
    password: {
        type: String,
        required: true
    }
} , { versionKey: false })
user.set("timestamps" , true)
module.exports = mongoose.model("user" , user)