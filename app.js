var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/form');
var catalogRouter = require('./routes/catalog')

var app = express();


//Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb+srv://Admin-User:gaelrodriguez@cluster0.xuizf.mongodb.net/Cluster0?retryWrites=true&w=majority';
var mongoDB = process.env.URI || dev_db_url;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);








/////////////////////
app.get('/:form', (req, res) =>{
  res.send('form')
})

app.post('/', (req,res) =>{
  res.json(req.body);
});

//store data
app.post('/', (req, res) => {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("form_library");
      dbo.collection("forms").insertOne({
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
      }, 
      function(err, result) {
          if (err) throw err;
          res.json(result);
          db.close();
      });
  });
});

app.get('/:form', (req, res) => {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("form_library");
      dbo.collection("forms").findOne({
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
      }, 
      function(err, result) {
          if (err) throw err;
          res.json(result);
          db.close();
      });
  });
});
////////////////////










// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

