require('rootpath')();
const express=require("express");
const app=express();
const cors = require('cors');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const config = require('config.json');

app.use(cors());

// parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//public folder
app.use(express.static(__dirname+"/dist"))

// use JWT auth to secure the api, the token can be passed in the authorization header or querystring
app.use(expressJwt({
    secret: config.secret,
    getToken: function (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
}).unless({ path: ['/users/authenticate', '/users/register'] }));

// routes
app.use('/users', require('./server/controllers/users.controller'));

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
