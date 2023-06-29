const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstname: { 
        type: String,
        required: true
    },
    lastname: { 
        type: String,
        required: true
    },
    contactNumber: { 
        type: Number,
        required: true,
        maxlength:10
    },
    
    dateofbirth: {
         type: Date,
         required: true
        },

        nic: { 
            type: String,
            required: true
        },


    address: {
        type: String,
        required: true},
    email: { 
        type: String,
        required: true},
    password: { 
        type: Number,
        required: true,
        unique:true
    },
    
}, {
    timestamps: true,
});



const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;