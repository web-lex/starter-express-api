
const Homesch = require("../model/Home")

const homeGet = async (req , res) => {
    try {
        const data = await Homesch.find(); 
        console.log(`Usernaem : ${req.username}`)
        res.send(data)   
    } catch (error) {
        res.send("Failed getting data")
    }
}
const homePost = async (req , res) => {
    try {
        const condition = Homesch.find();
        if((await condition).length < 3){
            const data = Homesch(req.body)
            await data.save();
            res.send(data)
        }else{
            res.status(400).send("You've Reached the Limit")
        }
           
    } catch (error) {
        res.status(400).send("failed to post")
    } 
}
module.exports = {homeGet , homePost};