const mysqlconn = require('../config/mysqlconn');
var Q = require('q')
service = {};

service.getOrganizations = getOrganizations;

module.exports = service;

function getOrganizations(querystring) {
    var deferred = Q.defer();
    mysqlconn.query("select id,name from organizations where name like '"+querystring+"%' ORDER BY name",function (err,rows) {
      if(err) deferred.reject("their is a error in the query");
      data=[];
      for(var i=0;i<rows.length;i++){
        data.push({"id":rows[i].id,"name":rows[i].name});
      }
      deferred.resolve(data)
    })
    return deferred.promise;
}


