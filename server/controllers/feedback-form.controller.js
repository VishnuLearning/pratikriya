const express = require('express')
const router = express.Router()
const formService = require('../services/form.service')
const FeedbackForm = require('../models/feedbackForm')

router.post('/getForm',getFormById)
router.get('/formList', getFormList)
router.get('/insertForm', insertForm )


module.exports = router

//completed
function getFormById(req, res){
    formService.getForms(req.body.id)
    .then((form) =>{ res.status(200).send(form)})
    .catch((err) =>{res.status(200).send([])})
}

//completed
function getFormList(req, res){
    formService.getFormList()
    .then((formList) =>{ res.status(200).send(formList)})
    .catch((err) =>{res.status(200).send([])})
}

//completed
function insertForm(req, res){
   formService.saveForm(req.body.form)
   .then(() =>{ res.status(200)})
   .catch((err) =>{res.status(400)})
}

