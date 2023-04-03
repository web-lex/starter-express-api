const user = require("../model/user")
const bcrypt = require("bcrypt")
const { generatejwt } = require("../services/services")

const getUser = async (req, res) => {
    return await res.status(200).json(user.find())
}
const postUser = async (req, res) => {
    const { username , password } = req.body
    try {
        if(!username || !password ){
            res.status(400).send("empty username or password")
        }else{
            bcrypt.hash(password , 10 , (err, hash) =>{
                const data = user({username: username, password : hash}).save()
                res.send({message: "Created"}) 
            })
    }    
    } catch (error) {
        res.send({message : error.message})
 }
}
const login = async ( req, res ) => {
   const {username, password} = req.body
   try {
    const data = await user.findOne({username : username})
    if(!data){
        res.status(404).send({message: "User not found"}) 
    }
    else{
        const hash = await bcrypt.compare(password , data.password)
        hash ? 
        res.send({accesstoken: generatejwt({payload: username})})
        : res.status(404).send({message: "Invalid Password"})
    }
   } catch (error) {
      res.send(error)
   }
} 

module.exports = {getUser , postUser, login} 