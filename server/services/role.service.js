var mysqlconn = require('../config/mysqlconn');
var Q = require('q');

service ={};

service.getRoles=getRoles;

module.exports =service;

function getRoles() {
  var defferd = Q.defer();

  mysqlconn.query('select id,type from roles',(err,rows)=>{
    if(err) defferd.resolve([])
    data=[];
    for(var i=0;i<rows.length;i++){
      data.push({"id":rows[i].id,"name":rows[i].type});
    }
    defferd.resolve(data)
  })


  return defferd.promise;
}
