const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({

    packageId : {type : String, required : true},
    item : {type : String,required : true},
    category : {type : String,required : true},
    specialNotes: {type :String, required : true},
    acceptedDate: {type :String, required : true},
    acceptedTime: {type :String, required : true},
    customerName: {type :String},
    address: {type :String, required : true},
    phone: {type :String},
    lostAndFound: {type :String},
    lostPlace: {type :String},
    lostDate: {type :String},
    lostTime: {type :String},


    
     
},{
        timestamps : true,
    
});


const Package = mongoose.model("Package", packageSchema);

module.exports = Package;