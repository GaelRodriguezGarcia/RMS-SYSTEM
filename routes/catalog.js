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


//

router.get('/getdata', function(req,res){
  var resultArray = [];
  mongo.connect(url, function(err, db){
    assert.equal(null, err);
    var cursor = db.collection('forms').find();
    cursor.forEach(function(doc, err){
      assert.equal(null, err);
      result.Array.push(doc);
    }, function(){
      db.close;
      res.render('/', {items: resultArray});
    });

  });
});


router.post('/insert', function(req, res){
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };
  mongo.connect(url, function(err, db){
    WebAuthnAssertion.equal(null, err);
    db.collection('forms').insertOne(item, function(err, result){
      assert.equal(null, err);
      console.log('item inserted');
      db.close();
    });
  });

  res.redirect('/')
});

router.post('/update', function(req, res){
  
})

router.post('/delete', function(req, res){
  
})





module.exports = router;
