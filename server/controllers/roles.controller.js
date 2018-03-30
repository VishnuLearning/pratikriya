var express =require('express')
var router = express.Router()

var roleService = require('../services/role.service')

router.get('/getroles',getRoles)

module.exports = router

function getRoles(req,res){
  roleService.getRoles().then((data)=>{
    res.status(200).send(data)
  }).catch((err)=>{
    res.status(200).send([])
  })
}
