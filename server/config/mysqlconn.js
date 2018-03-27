const mysql = require('mysql')
const config = require('config.json');

var con = mysql.createConnection( {
    host:config.mysqlhost,
    user:config.mysqluser,
    password:config.mysqlpassword,
    database:config.mysqldb
})

con.connect(function(err) {
    if (err) throw err
    console.log("mysql connected!")
})

modules.exports=con
