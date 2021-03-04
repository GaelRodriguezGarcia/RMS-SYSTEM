var express = require("express")
var router = express.Router();


/* GET manage_form page. */
router.get('manage_forms', function(req, res, next) {
    res.render('manage_forms')
  });

router.post('manage_forms', function(req,res,){
  res.send('form');
})



module.exports = router;
