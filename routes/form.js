var express = require('express');
var router = express.Router();

/* GET form page */
router.get('/form', function(req, res, next) {
  res.render('form_page')
});



module.exports = router;
