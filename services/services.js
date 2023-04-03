const jwt = require("jsonwebtoken")
require("dotenv").config();

const generatejwt = (payload) => {
    return jwt.sign(payload , process.env.ENCRYPT_KEY, {
        algorithm: "HS512",
        expiresIn: "24h"
    })
}
const verifyJWT = (generatejwt) => {
return jwt.verify(generatejwt , process.env.ENCRYPT_KEY)
}

// const jwt2 = generatejwt({payload: "ahmed"})
// console.log(jwt2)


// try {
    // const toke = "Bearer eyJhbGciOiJIUzUxMiIsIhhnR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiYWhtZWQiLCJpYXQiOjE2ODAyNDY0ODksImV4cCI6MTY4MDMzMjg4OX0.ZWiDRRh_N_Law4YuuL9cq2dfJREjGp83ABp6c5Nxyn6jIknxRh_o1m6oCEQggOjhe1rwy-Ui_d1xeI0nm3Idtg"
    // const token = toke.split("Bearer ")[1]
    // console.log(token);
    //     console.log(verifyJWT(toke))
// } catch (error) {
//     console.log("sdgsdg")
// }
module.exports = {generatejwt, verifyJWT}