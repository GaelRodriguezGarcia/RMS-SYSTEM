var form = require('../models/form');

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
        res.render('/catalog', {items: resultArray});
      });
  
    });
  }




// //create/add form
// exports.form_create_post =(req, res) =>{
//     //validate form
//     if(req.body){
//         res.status(400).send({message:"content cannot be empty!"});
//         return;
//     }

//     //new form
//     const form = new formdb({
//         //incident info 
//         date:req.body.date,
//         time:req.body.time,
//         type:req.body.type,
//         location:req.body.location,

//         //personal info 
//         name:req.body.name,
//         age:req.body.age,
//         sex:req.body.sex,
//         height:req.body.height,
//         weight:req.body.weight,
//         hair:req.body.hair,
//         eye:req.body.eye,
//         address:req.body.adress,
//         phone:req.body.phone,

//         //narrative 
//         summary:req.body.summary,

//         //officer info
//         officername:req.body.officername,
//         serial:req.body.serial,

//         //vehicle info 
//         plate:req.body.plate,
//         vin:req.body.vin,
//         color:req.body.color,
//         year:req.body.year,
//         make:req.body.make,
//         model:req.body.model,
//         title:req.body.title
//     })
//     //save form on db
//     form
//         .save(form)
//         .then(data =>{
//             res.send(data)
//         })
//         .catch(err =>{
//             screen.status(500).send({
//                 message: err.message || "Some error occured while creating a operation"
//             })
//         })
// }




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


