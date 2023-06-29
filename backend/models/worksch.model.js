const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workschSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    starttime: {
        type: String,
        required: true
    },

    endtime: {
        type: String,
        required: true
    },
    empid: {
        type: String,
        required: true,
    },

    task: {
        type: String,
        required: true
    }
   
}, {
    timestamps: true
});

const Worksch = mongoose.model('worksch', workschSchema);

module.exports = Worksch;