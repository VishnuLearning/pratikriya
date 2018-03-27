var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
const mysqlcon = require("../config/mysqlcon")

var service = {};

service.authenticate = authenticate;
service.getById = getById;
service.create = create;
service.update = update;

module.exports = service;

function authenticate(email, password) {
    var deferred = Q.defer();
    mysqlcon.query('select ID, email, password, name from users where email = ?', [email], function (err, rows) {
        if (err) deferred.reject(err.name + ': ' + err.message)

        if (rows.length && bcrypt.compareSync(password, rows[1].password)) {
            deferred.resolve({
                _id: rows[1].ID,
                email: email,
                name: rows[1].name,
                token: jwt.sign({ sub: rows[1].ID }, config.secret)
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
            deferred.resolve(_.omit(rows[1], 'password'));
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
                        createAdminUser();
                    }
                })
            } else {
                // user not found
                createUser();
            }
        }
    })



    function createAdminUser() {

        if (userParam.role == 1) {
            // insert organization first
            mysqlcon.query('insert into organizations (...) values (...)', [...], function (err, rows) {
                //handle error
                // if success
                //do another query to insert user (or vice versa depending upon the foreign key constraint)
                // add hashed password to user object
                user.password = bcrypt.hashSync(userParam.password, 10);
            })
        }
    }

    function createUser() {

        if (userParam.role == 1) {
            // insert organization first
            mysqlcon.query('insert into organizations (...) values (...)', [...], function (err, rows) {
                //handle error
                // if success
                //do another query to insert user (or vice versa depending upon the foreign key constraint)
                // add hashed password to user object
                user.password = bcrypt.hashSync(userParam.password, 10);
            })
        }
    }

    return deferred.promise;
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

        u.remove((err) => {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });
    }

    return deferred.promise;
}
