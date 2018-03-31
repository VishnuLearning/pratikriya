require('rootpath')()
const express=require("express")
const app=express()
const cors = require('cors')
const bodyParser = require('body-parser')
const expressJwt = require('express-jwt')
const config = require('config.json')
const FeedbackForm = require('./server/models/feedbackForm')
const redirector = require('./server/controllers/redirect.controller')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// server client files
app.use(express.static(__dirname+"/dist"))

// redirect to homepage
app.get('/get', redirector)
app.get('/set', redirector)
app.get('/go', redirector)
app.get('/newform',redirector)


//use JWT auth to secure the api, the token can be passed in the authorization header or querystring

app.use(expressJwt({
    secret: config.secret,
    getToken: function (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1]
        } else if (req.query && req.query.token) {
            return req.query.token
        }
        return null
    }
}).unless({ path: ['/users/authenticate', '/users/register','/roles/getroles','/organizations/getorganizations'] }))

//routes
app.use('/users', require('./server/controllers/users.controller'))

app.use('/organizations', require('./server/controllers/organizations.controller'))

app.use('/roles', require('./server/controllers/roles.controller'))

app.use('/get', require('./server/controllers/feedback-form.controller'))


  
// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 8080
const server = app.listen(port, function () {
    console.log(`Server listening on port ${port}`)
})


















/*
// save a new form to db 
app.post('/insert', function(req, res){
  let Form =  req.body
  Form = require('./server/services/data')
  let form = new FeedbackForm(Form)
  form.save(function(err, data){
      if(err) throw err
      console.log("data saved:)")
      res.send("heaven")
  })
})


// get forms from db
app.get('/getForm', function(req, res){
    FeedbackForm.find(function(err, form){
        if(err) throw err
        console.log("i got my data :)")
        res.send(form)
    })
})

//get form list conataing form names and ids
app.get('/formList', function(req, res){
    FeedbackForm.find().select('name _id').exec(function(err, formList){
        if(err) throw err
        res.send(formList)
    })
})

app.get('/getForm', function(req, res){
    FeedbackForm.find(function(err, form){
        if(err) throw err
        console.log("i got my data :)")
        res.send(form)
    })
})

*/