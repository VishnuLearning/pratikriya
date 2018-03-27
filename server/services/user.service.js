var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var config = require('../../config.json')
const mysqlcon = require("../config/mysqlconn")

var service = {};

service.authenticate = authenticate;
//service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function authenticate(email, password) {
  var deferred = Q.defer();
  mysqlcon.query('select ID, email, password, name from users where email = ?', [email], function (err, rows) {
    if (err) deferred.reject(err.name + ': ' + err.message)

    if (rows.length && bcrypt.compareSync(password, rows[0].password)) {
      deferred.resolve({
        _id: rows[0].ID,
        email: email,
        name: rows[0].name,
        token: jwt.sign({ sub: rows[0].ID }, config.secret)
      });
    } else {
      // user not found
      deferred.resolve();
    }
  })

  return deferred.promise;
}

function getById(_id) {
  var deferred = Q.defer();

  mysqlcon.query('select * from users where ID = ?', [_id], function (err, rows) {
    if (err) deferred.reject(err.name + ': ' + err.message)

    if (rows.length) {
      // return user (without hashed password)
      deferred.resolve(_.omit(rows[0], 'password'));
    } else {
      // user not found
      deferred.resolve();
    }
  })

  return deferred.promise;
}

function create(userParam) {
  var deferred = Q.defer();
  // validation
  bcrypt.hash(userParam.password, 10, function (err, hashpassword){
    mysqlcon.query('select ID from users where email = ?', [userParam.email], function (err, rows) {
      if (err) deferred.reject(err.name + ': ' + err.message)
      if (rows.length) {
        // return user (without hashed password)
        deferred.reject('Username "' + userParam.email + '" is already taken');
      } else {
        // user not found
        if (userParam.role == 1) { //validate organization
          mysqlcon.query('select ID from organizations where name = ?', [userParam.organization.name], function (err, rows) {
            if (err) deferred.reject(err.name + ': ' + err.message)

            if (rows.length) {
              deferred.reject('Organization "' + userParam.organization.name + '" is already registered under different admin');
            } else {
              // organization not found
              createAdminUser(hashpassword);
            }
          })
        } else {
          // user not found
          createUser(hashpassword);
        }
      }
    })
  })

  function createAdminUser(password) {

    if (userParam.role == 1) {
      //insert the user
      mysqlcon.query('insert into users (name,email,phone,roleid,designation,password) values(?,?,?,?,?,?)',[userParam.name,userParam.email,userParam.phone,userParam.role,userParam.designation,password],function(err,rows){
        if(err){
          deferred.reject(err.name)
        }
        else{
          mysqlcon.query('select ID from users where email = ?', [userParam.email],function (err,rows) {
            var adminid=rows[0].ID
            mysqlcon.query('insert into organizations (name,address,city,country,zip,adminid) values(?,?,?,?,?,?)',[userParam.organization.name,userParam.organization.address,userParam.organization.city,userParam.organization.country,userParam.organization.zip,adminid],function(err,rows){
              if(err) {
                deferred.reject("failed in the creation of the orgazination")
                mysqlcon.query('delete from users where ID=?',[rows[0].ID],function(err,result){})
              }
              else{

                mysqlcon.query('select ID from organizations where adminid = ?',[adminid],function (err,rows) {
                  if(err) deferred.reject("error in update of rows");
                  else{
                    mysqlcon.query('update users set Oid=? where ID= ?',[rows[0].ID,adminid],function (err,result) {
                      if(err) {
                        deferred.reject("error in updating the admin Oid")
                      }
                      else{
                        deferred.resolve()
                      }
                    })
                  }
                })
              }
            })
          })
        }
      })
      // insert organization first
      /*mysqlcon.query('insert into organizations (...) values (...)', [...], function (err, rows) {
          //handle error
          // if success
          //do another query to insert user (or vice versa depending upon the foreign key constraint)
          // add hashed password to user object
          user.password = bcrypt.hashSync(userParam.password, 10);
      })*/
    }
  }
  function createUser(password) {
    mysqlcon.query('insert into users (name,email,phone,roleid,designation,password,Oid) values(?,?,?,?,?,?,?)',[userParam.name,userParam.email,userParam.phone,userParam.role,userParam.designation,password,userParam.Oid],function(err,rows) {
      if(err) deferred.reject("error in the creation if the user")
      deferred.resolve()
    })

  }
  return deferred.promise
}

function update(_id, userParam) {

  var deferred = Q.defer();

  mysqlcon.query('select * from users where ID = ?', [_id], function (err, rows) {
    if (err) deferred.reject(err.name + ': ' + err.message)

    if (rows.length) {
      // return user (without hashed password)
      updateUser();
    } else {
      // user not found
      deferred.resolve();
    }
  })


  function updateUser() {
    // fields to update
    // run update query
  }

  return deferred.promise;
}

function _delete(_id) {
  var deferred = Q.defer();

  User.findById(_id, function (err, user) {
    if (err) deferred.reject(err.name + ': ' + err.message);

    deleteUser(user);
  });

  function deleteUser(user) {
    // fields to update
    var u = new User(user);

    u.remove(function(err){
      if (err) deferred.reject(err.name + ': ' + err.message);

    deferred.resolve();
  });
  }

  return deferred.promise;
}
