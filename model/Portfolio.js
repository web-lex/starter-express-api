const { default: mongoose } = require("mongoose");

const Portfolio = mongoose.Schema({
    projecttitle:{
      type: String,
      required:true
    },
    projecturl:{
        type: String,
        required:true
    }
},  { versionKey: false })

const Portfoliotitle = mongoose.Schema({
    title: {
        type: String,
        required:true
    }
},  { versionKey: false })

module.exports = {Portfolio : mongoose.model("Portfolio" , Portfolio),
 Portfoliotitle: mongoose.model("Portfoliotitle" , Portfoliotitle)}
