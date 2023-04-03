const about = require("../model/About")

const getAbout = async (req, res) => {
    try {
        const data = await about.find();
        res.send(data)        
    } catch (error) {
        res.status(400).send({message: "Smtn messed up"})
    }
}
const postAbout = async (req, res) => {
    try {
        const check = await about.find();
        if(check.length >= 1){
        res.send({message : "bruh , u reached limit"})
        }
        else{
        const data = await about(req.body).save();
        res.send(data)}        
    } catch (error) {
        res.status(400).send({message: "Smtn messed up"})
        
    }
}
module.exports = {getAbout, postAbout}