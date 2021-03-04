var express = require("express")
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/form controller.js');

var express = require('express');
var router = express.Router();



/* GET manage_form page. */
router.get('../views/manage_forms', function(req, res, next) {
    res.render('manage_forms')
  });




module.exports = router;
