const mongoose = require('mongoose')
const config = require('config.json')
mongoose.connect(config.connectionString, (err)=>{
    if(err) throw err
    console.log("mongodb connected:)")
})

module.exports = mongoose
