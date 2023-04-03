const { default: mongoose } = require("mongoose");

 const contact = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    whatsapp: {
        type: String,
        required: true
    }
},  { versionKey: false })

module.exports = mongoose.model("contact" , contact)