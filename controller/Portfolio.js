
const { Portfolio, Portfoliotitle } = require("../model/Portfolio")

const portfolioGet = async (req, res) => {
    try {
        const data = await Portfolio.find()
        res.send(data)
    }
    catch (error) {

    }
}
const portfoliopost = async (req, res) => {
    try {
        const data = Portfolio(req.body)
        await data.save();
        res.send(data)
    }
    catch (error) {
    }
}
const portfoliotitleGet = async (req, res) => {
    try {
        const data = await Portfoliotitle.find()
        res.send(data)
    }
    catch (error) {

    }
}
const portfoliotitlepost = async (req, res) => {
    try {
        const check = await Portfoliotitle.find()
        if (check.length >= 1) {
            res.send({ message: "You've reached limit" })
        }
        else {
            const data = Portfoliotitle(req.body)
            await data.save();
            res.send(data)
        }
    }
    catch (error) {

    }
}

module.exports = { portfolioGet, portfoliopost, portfoliotitleGet, portfoliotitlepost }