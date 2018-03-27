const mongoose = require("../config/mongodb")

const user = {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    phone:String,

}

module.exports = mongoose.model("User", user)
