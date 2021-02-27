var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/form.js', function(req, res){
  res.send('Form info');
})

module.exports = router;
