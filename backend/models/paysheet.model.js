const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paysheetSchema = new Schema({

    
   
    noOfDays: { 
        type: Number,
        required: true
    },
    regularOt: { 
        type: Number,
        required: true
        
    },
    
    specialHolidays: {
         type: Number,
         required: true
        },
    totalOtPay: {
        type: Number,
        required: true
    },
    otherPay: { 
        type: Number,
        required: true
    },
    loan: { 
        type: Number,
        required: true
        
    },
    deduction: {
        type: Number,
        required: true
    },
    otherDeduction: { 
        type: Number,
        required: true
    },
    totalDeduction: { 
        type: Number,
        required: true
        
    },
    netPay: { 
        type: Number,
        required: true
        
    },
    
}, {
    timestamps: true,
});



const Paysheet = mongoose.model('Paysheet', paysheetSchema);

module.exports = Paysheet;