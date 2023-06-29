const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    packageID:{
        type:String,
        required:true
    },

    senderName:{
        type:String,
        required:true
    },

    senderAddress:{
        type:String,
        required:true
    },

    senderPostalCode:{
        type:String,
        required:true
    },

    senderCity:{
        type:String,
        required:true
    },

    senderTelephone:{
        type:String,
        required:true
    },

    senderEmail:{
        type:String,
        required:true
    },

    parcelWeight:{
        type:Number,
        required:true
    },

    deliveryFee:{
        type:Number,
        required:true
    },

    recipientName:{
        type:String,
        required:true
    },

    recipientAddress:{
        type:String,
        required:true
    },

    recipientPostalCode:{
        type:String,
        required:true
    },

    recipientCity:{
        type:String,
        required:true
    },

    recipientTelephone:{
        type:String,
        required:true
    },

    recipientEmail:{
        type:String,
        required:true
    },


}, {timestamps:true})

module.exports = mongoose.model('order',orderSchema)