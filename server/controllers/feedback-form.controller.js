var express = require('express');
var router = express.Router();
var formService = require('../services/form.service');

router.get('/forms',displayPreviousForms);

module.exports = router;

function displayPreviousForms(){
    formService.displayPreviousForms()
    .then((forms) =>{ res.status(200).send(forms);})
    .catch((err) =>{res.status(200).send(data);})
}

