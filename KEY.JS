const bcrypt = require("bcrypt")

bcrypt.hash("knkjnkj" , 10 , (err, hash) => {
console.log(hash)
})