const mongoose = require('../config/mongodb');


const feedbackForm = {
    //define schema
    name : String,
    createdBy: String,
    purpose: String,
    sections:[
      { 
         name:String,
         questions:[
             {
                 text:String,
                 name:String,
                 qType:String,
                 choices:[
                     {
                         text:String,
                         score:Number
                     }
                 ]
             }
         ] 
      }
    ] 
};

module.exports = mongoose.model("FeedbackForm", feedbackForm);

