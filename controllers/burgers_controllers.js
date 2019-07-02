// node dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


//creating routes

router.get('/', function (req,res) {
    res.redirect('index');
});

//index page (render all burgers to DOM)
router.get('/index'), function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {burgers: data };
        //console.log(hbsObject);
    });
};

//Create Burger 
router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect('/index');
    });
});

//Devour burger
router.post('/burger/eat/:id', function (req, res){
    burger.updateOne(req.params.id, function() {
        res.redirect('/index');
    });
});
//------------------------------------------

//export routes
module.exports = router;

