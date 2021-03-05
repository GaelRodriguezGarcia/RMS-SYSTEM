var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/form.js', function(req, res){
//   res.send('Form info');
// })

// /* GET form page */
// router.get('vie', function(req, res, next) {
//   res.render('form_page')
// });



module.exports = router;
