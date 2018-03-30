const mysqlconn = require('../config/mysqlconn')
const Q = require('q')
const service = {}

service.getOrganizations = getOrganizations

module.exports = service

function getOrganizations(querystring) {
    let deferred = Q.defer()
    mysqlconn.query("select id,name from organizations where name like '"+querystring+"%' ORDER BY name",function (err,rows) {
      if(err) deferred.reject("their is a error in the query")
      data=[]
      for(let i=0; i<rows.length; i++){
        data.push({"id":rows[i].id,"name":rows[i].name})
      }
      deferred.resolve(data)
    })
    return deferred.promise
}


