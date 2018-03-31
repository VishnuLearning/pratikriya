//need to have functions to create a new form in mongodb
//to serve a form given the form id
// get the form schema from Shankar

const FeedbackForm = require('../models/feedbackForm')
const Q = require('q')
const service = {}

service.getFormList = getFormList
service.saveForm = saveForm
service.getFormById = getFormById

module.exports = service

//completed
function getFormById(id){
    let deferred = Q.defer()
    FeedbackForm.find({_id : id} ,function (err, form) {
        if(err) deferred.reject("their is a error via MONGODB")
        deferred.resolve(form)
    })
    return deferred.promise
}

//completed
function getFormList(){
    let deferred = Q.defer()
    FeedbackForm.find().select('name _id').exec(function(err, formList){
        if(err) deferred.reject("their is a error via MONGODB")
        console.log("form list sent")
        deferred.resolve(formList)
    })
    return deferred.promise
}

//completed
function saveForm(form){
    let deferred = Q.defer()
    let Form = new FeedbackForm(form)
    Form.save(function(err, form){
        if(err) deferred.reject("their is a error via MONGODB")
        console.log("form saved :)")
        deferred.resolve(form)
    })
    return deferred.promise
}




