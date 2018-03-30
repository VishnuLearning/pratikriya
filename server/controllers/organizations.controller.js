var express = require('express')
var router = express.Router()
var organizationService = require('../services/organization.service')

router.post('/getorganizations',getOrganizations)

module.exports = router

function getOrganizations(req,res) {
  organizationService.getOrganizations(req.body.substring).then((data)=>{
    res.status(200).send(data)
  }).catch((err)=>{
    res.status(200).send([])
  })
}
