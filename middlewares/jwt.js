const { verifyJWT } = require("../services/services");


function jwt(req ,res ,next){
    const bearerToken = req.headers['authorization'];
    // console.log(`bearerToken : ${JSON.stringify(req.headers)}`)

    if(bearerToken == null || undefined){
        return res.status(403).json({
            message: "No token found"
        })
    }
    const token = bearerToken.split("Bearer ")[1];

    try {
        const username = verifyJWT(token);
        req.id = username.payload;
        next();
    } catch (error) {
        return res.status(403).json({
            message: "Token is expired"
        })
    }
}

module.exports = {
    jwt: jwt
}