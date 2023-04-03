const { default: mongoose } = require("mongoose");

const Home = mongoose.Schema({
  title:{
    type: String, 
    required: true
  }
} ,  { versionKey: false })

module.exports = mongoose.model("Home" , Home)