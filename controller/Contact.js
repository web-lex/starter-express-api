const contact = require("../model/Contact")

const getContact = async (req , res) => {
    try {
        const data = await contact.find()
        res.send(data)    
    } catch (error) {
        res.send({message: "You messed smthn up"})
    }
}
const postContact = async (req , res) => {
    try {
        const condition = await contact.find()
        if(condition.length >= 1){
            res.send({message: "You've reached limit bruhh"})
        }
        else{
        const data = await contact(req.body).save()
        res.send(data)}    
    } catch (error) {
        res.send({message: error.message})
    }
}

module.exports = {getContact , postContact}