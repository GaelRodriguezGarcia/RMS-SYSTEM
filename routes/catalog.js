var express = require("express")
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/formcontroller.js');

var express = require('express');
var router = express.Router();



/* GET manage_form page. */
router.get('/create/forms', formcontrollers.form_page);




module.exports = router;
