var form = require('../models/form');
var mongo = require('mongodb').MongoClient;


exports.index = function(req, res){
    res.render('index');
};



// //display the list of the forms
exports.form_page = function(req, res){
    
            res.render('form_page');

};

exports.manage_form = function(req, res){
    
    res.render('manage_form');

};

//get the data
exports.form_create_get = function(req,res){
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
  }




//create/add form/// //insert
exports.form_create_post =(req, res) =>{
    //validate form
    if(req.body){
        res.status(400).send({message:"content cannot be empty!"});
        return;
    };

      var item = {
             //incident info 
             ir:req.body.ir,
             date:req.body.date,
             time:req.body.time,
             type:req.body.type,
             code:req.body.type,
             location:req.body.location,
             //personal info 
             fname:req.body.fname,
             mname:req.body.mname,
             lname:req.body.fname,
             ssn:req.body.ssn,
             race:req.body.race,
             age:req.body.age,
             sex:req.body.sex,
             height:req.body.height,
             weight:req.body.weight,
             hair:req.body.hair,
             eye:req.body.eye,
             address:req.body.adress,
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
              body:req.body.body,
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
    };




// //edit form
// exports.find =(req,res) =>{
//     Formdb.find()
//     .then(user => {
//         res.send(form)
//     })
//     .catch(err =>{
//         res.status(500).send({message : err.message ||"error"})
//     })
// }


// //delete form



// //create/add form


