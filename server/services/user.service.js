const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Q = require('q')
const config = require('../../config.json')
const mysqlcon = require("../config/mysqlconn")

const service = {}

service.authenticate = authenticate
//service.getAll = getAll
service.getById = getById
service.create = create
service.update = update
service.delete = _delete

module.exports = service

function authenticate(email, password) {
  let deferred = Q.defer()
  console.log(email+", "+password)
  mysqlcon.query('select ID, email, password, name from users where email = ?', [email], function (err, rows) {
    if (err) deferred.reject(err.name + ': ' + err.message)
    //password = bcrypt.hashSync(password, 10)
    console.log(password)
    
    if (rows.length) {
      console.log(rows[0].password)
      if(bcrypt.compareSync(password, rows[0].password))
      deferred.resolve({
        _id: rows[0].ID,
        email: email,
        name: rows[0].name,
        token: jwt.sign({ sub: rows[0].ID }, config.secret)
      })
      else deferred.resolve()
    } else {
      // user not found
      deferred.resolve()
    }
  })

  return deferred.promise
}

function getById(_id) {
  let deferred = Q.defer()

  mysqlcon.query('select * from users where ID = ?', [_id], function (err, rows) {
    if (err) deferred.reject(err.name + ': ' + err.message)

    if (rows.length) {
      // return user (without hashed password)
      deferred.resolve(_.omit(rows[0], 'password'))
    } else {
      // user not found
      deferred.resolve()
    }
  })

  return deferred.promise
}

function create(userParam) {
  let deferred = Q.defer()

  // validation
  userParam.password = bcrypt.hashSync(userParam.password, 10)
  mysqlcon.query('select ID from users where email = ?', [userParam.email], function (err, rows) {
    if (err) deferred.reject(err.name + ': ' + err.message)
    if (rows.length) {
      // return user (without hashed password)
      deferred.reject('Username "' + userParam.email + '" is already taken')
    } else {
      // user not found
      if (userParam.role == 1) { //validate organization
        mysqlcon.query('select ID from organizations where name = ?', [userParam.org.orgname], function (err, rows) {
          if (err) deferred.reject(err.name + ': ' + err.message)

          if (rows.length > 0) {
            console.log("")
            deferred.reject('Organization "' + userParam.org.orgname + '" is already registered under different admin')
          } else {
            // organization not found
            //console.log(userParam)
            createAdminUser()
          }
        })
      } else {
        // user not found
        createUser()
      }
    }
  })

  function createAdminUser() {
    //console.log(userParam.org.contactphone)
    if (userParam.role == 1) {
      //insert the user
      mysqlcon.query('insert into users (name,email,phone,roleid,designation,password) values(?,?,?,?,?,?)', [userParam.name, userParam.email, userParam.org.contactphone, userParam.role, userParam.designation, userParam.password], function (err, rows) {
        console.log("jarvis debugger", err)

        if (err) {
          deferred.reject(err.name)
        }
        else {
          mysqlcon.query('select ID from users where email = ?', [userParam.email], function (err, rows) {
            //if(err) console.log("jarvis 1",err)
            console.log("hello errors")
            let adminid = rows[0].ID
            mysqlcon.query('insert into organizations (name,address,city,country,zip,adminid) values(?,?,?,?,?,?)', [userParam.name, userParam.org.address, userParam.org.city, userParam.org.country, userParam.org.zip, adminid], function (err, rows) {
              if (err) {
                deferred.reject("failed in the creation of the orgazination")
                mysqlcon.query('delete from users where ID=?', [rows[0].ID], function (err, result) { })
              }
              else {

                mysqlcon.query('select ID from organizations where adminid = ?', [adminid], function (err, row) {
                  if (err) deferred.reject("error in update of rows")
                  else {
                    console.log("admin id = "+adminid)
                    mysqlcon.query('update users set organizationid=? where ID= ?', [row[0].ID, adminid], function (err, result) {
                      if (err) {

                        deferred.reject("error in updating the admin Oid")
                      }
                      else {
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
          user.password = bcrypt.hashSync(userParam.password, 10)
      })*/
    }
  }
  function createUser() {
    mysqlcon.query('insert into users (name,email,phone,roleid,designation,password,Oid) values(?,?,?,?,?,?,?)', [userParam.name, userParam.email, userParam.phone, userParam.role, userParam.designation, password, userParam.Oid], function (err, rows) {
      if (err) deferred.reject("error in the creation if the user")
      deferred.resolve()
    })

  }
  return deferred.promise
}

function update(_id, userParam) {

  const deferred = Q.defer()

  mysqlcon.query('select * from users where ID = ?', [_id], function (err, rows) {
    if (err) deferred.reject(err.name + ': ' + err.message)

    if (rows.length) {
      // return user (without hashed password)
      updateUser()
    } else {
      // user not found
      deferred.resolve()
    }
  })


  function updateUser() {
    // fields to update
    // run update query
  }

  return deferred.promise
}

function _delete(_id) {
  let deferred = Q.defer()

  User.findById(_id, function (err, user) {
    if (err) deferred.reject(err.name + ': ' + err.message)

    deleteUser(user)
  })

  function deleteUser(user) {
    // fields to update
    let u = new User(user)

    u.remove(function (err) {
      if (err) deferred.reject(err.name + ': ' + err.message)

      deferred.resolve()
    })
  }

  return deferred.promise
}
