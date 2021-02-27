var form = require('/form.js');

//display the list of the forms
exports.form_page = function(req, res, next){
    form.find()
        .exec(function (err, form_page) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('page_form', { title: 'Form page', form_page: page_form });
        });

};



//edit form



//delete form



//create/add form


