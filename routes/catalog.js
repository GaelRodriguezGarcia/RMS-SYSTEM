var express = require("express")
var router = express.Router();

// Require controller modules.
var formcontrollers = require('../controllers/formcontroller.js');


router.get('/', formcontrollers.index)

// /* GET manage_form page. */
/* GET manage_form page. */
router.get('/create/forms', formcontrollers.form_page);

router.post('manage_form', function(req,res){
  res.send('form');
})

router.get('/create/formpage', formcontrollers.manage_form);

router.post('manage_form', function(req,res){
  res.send('form page');
})





module.exports = router;
