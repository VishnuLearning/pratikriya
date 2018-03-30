const mysqlconn = require('../config/mysqlconn')
const Q = require('q')

service ={}

service.getRoles=getRoles

module.exports =service

function getRoles() {
  let defferd = Q.defer()

  mysqlconn.query('select id,type from roles',(err,rows)=>{
    if(err) defferd.resolve([])
    data=[]
    for(let i=0; i<rows.length; i++){
      data.push({"id":rows[i].id,"name":rows[i].type})
    }
    defferd.resolve(data)
  })


  return defferd.promise
}
