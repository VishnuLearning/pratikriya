//need to have functions to create a new form in mongodb
//to serve a form given the form id
// get the form schema from Shankar

const FeedbackForm = require('../models/feedbackForm');
const Q = require('q');
const service = {};

service.displayPreviousForms = displayPreviousForms;

module.exports = service;

function displayPreviousForms(){
    let deferred = Q.defer();
    
    FeedbackForm.find(function (err, forms) {
        if(err) deferred.reject("their is a error via MONGODB");
        deferred.resolve(forms)
    });
    return deferred.promise;
}