var express = require("express")
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/formcontroller.js');

/* GET manage_form page. */
router.get('/create/forms', formcontrollers.form_page);

router.post('manage_forms', function(req,res,){
  res.send('form');
})



module.exports = router;
