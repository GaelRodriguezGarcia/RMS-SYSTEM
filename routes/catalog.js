var express = require("express")
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// Require controller modules.
var formcontrollers = require('../controllers/formcontroller.js');

//display index route
router.get('/', formcontrollers.index)

// display form page route
router.get('/create/forms', formcontrollers.form_page);

router.post('form_page', function(req,res){
  res.send('form');
})

//display manage route
router.get('/create/manageforms', formcontrollers.manage_form);

router.post('manage_form', function(req,res){
  res.send('form page');
})

//get data route
router.get('/create/insertdata', formcontrollers.form_create);

router.post('/create/insertdata', formcontrollers.form_create);



//save data route
router.get('/create/insertdata', formcontrollers.form_create);

router.post('/create/insertdata', formcontrollers.form_create);


//update/edit route
router.get('/create/update', formcontrollers.form_update);

router.post('form_update', formcontrollers.form_update);


//delete route
router.get('/create/delete', formcontrollers.form_delete);

router.post('form_delete', formcontrollers.form_delete);



module.exports = router;
