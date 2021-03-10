var express = require("express")
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// Require controller modules.
var formcontrollers = require('../controllers/formcontroller.js');

//display index
router.get('/', formcontrollers.index)

// display form page
router.get('/create/forms', formcontrollers.form_page);

router.post('form_page', function(req,res){
  res.send('form');
})

//display manage
router.get('/create/manageforms', formcontrollers.manage_form);

router.post('manage_form', function(req,res){
  res.send('form page');
})

//get data
router.get('/create/getdata', formcontrollers.form_create_get);

router.post('form_create_get', function(req,res){
  res.send('info');
})




// router.get('/create/insertrdata', formcontrollers.insert_form_data);

// router.post('form_page', function(req, res){
//   res.send('info');
// })



//get data

router.get('create/getdata', function(req,res){
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


//insert
router.post('/insert', function(req, res){
  var item = {
         //incident info 
         date:req.body.date,
         time:req.body.time,
         type:req.body.type,
         location:req.body.location,
         //personal info 
         name:req.body.name,
         age:req.body.age,
         sex:req.body.sex,
         height:req.body.height,
         weight:req.body.weight,
         hair:req.body.hair,
         eye:req.body.eye,
         adress:req.body.adress,
         phone:req.body.phone,
         //narrative 
         summary:req.body.summary,
         //officer info
         officername:req.body.officername,
         serial:req.body.serial,
         //vehicle info 
         plate:req.body.plate,
         vin:req.body.vin,
         color:req.body.color,
         year:req.body.year,
         make:req.body.make,
          model:req.body.model,
          title:req.body.title
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


//update
router.post('/update', function(req, res){
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };
  var id = req.body.id;
  mongo.connect(url, function(err, db){
    WebAuthnAssertion.equal(null, err);
    db.collection('forms').updateOne({"_id:": ObjectID(id)}, {$set: item}, function(err, result){
      assert.equal(null, err);
      console.log('item updated');
      db.close();
    });
  });
});


//delete
router.post('/delete', function(req, res){
  var id = req.body.id;
  mongo.connect(url, function(err, db){
    WebAuthnAssertion.equal(null, err);
    db.collection('forms').deleteOne({"_id:": ObjectID(id)}, function(err, result){
      assert.equal(null, err);
      console.log('item deleted');
      db.close();
    });
  });
});





module.exports = router;
