const mongoose = require('mongoose');

//incident info schema
    const incidentSchema = mongoose.Schema({
        ir:{type: String, required: true},
        date:{type: Number, required: true},
        time:{type: Number, required: true},
        type:{type: String, required: true},
        code:{type: String, required: true},
        location:{type: String, required: true},
        
    })

    module.exports = mongoose.model('Incident', incidentSchema)

//personal info schema
    const personalSchema = mongoose.Schema({
        fname:{type: String, required: true},
        mname:{type: String, required: true},
        lname:{type: String, required: true},
        ssn:{type: String, required: true},
        race:{type: String, required: true},
        age:{type: Number, required: true},
        sex:{type: String, require: true},
        height:{type: Number, required: true},
        weight:{type: Number, required: true},
        hair:{type: String, required: true},
        eye:{type: String, required: true},
        address:{type: String, required: false},
        phone:{type: Number, required: false}
    });

    module.exports = mongoose.model('Personal', personalSchema);

//narrative schema
    const narritiveSchema = mongoose.Schema({
        summary:{type: String, required:true}
    });

    module.exports = mongoose.model('Narrative', narritiveSchema);


//officer info schema
    const officerSchema = mongoose.Schema({
        officername:{type:String, required: true},
        serial:{type:String, required: true},
    })

    module.exports = mongoose.model('Officer', officerSchema);

//vehicle info schema
    const vehicleSchema = mongoose.Schema({
        plate:{type:String, required: true},
        vin:{type:String, required: true},
        color:{type:String, required: true},
        year:{type: Number, required: true},
        make:{type:String, required: true},
        model:{type:String, required: true},
        body:{type:String, required: true},
        title:{type:Boolean, required:true}
    })

    module.exports = mongoose.model('Vehicle', vehicleSchema);
