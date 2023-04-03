const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb+srv://abdullah:Khan1144@portfolio.iuxfqip.mongodb.net/test").
then(() => console.log("DB Connected")).catch(e => console.log(e))