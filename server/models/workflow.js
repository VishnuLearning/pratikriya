const mongoose = require("../config/mongodb")

const workflow = {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    phone:String,
}

module.exports = mongoose.model("Workflow", workflow)
