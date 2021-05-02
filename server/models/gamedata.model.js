const mongoose = require('mongoose');


const CardSchema = new mongoose.Schema({
    fieldNUm:{
        type: Number,
        required:true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        // required: true,
    },
    headerColor: {
        type: String,
        // required: true,
    },
    cardDetails: {
        rent:{
            type:Number,         
        },
        rentWithColorSet:{
            type:Number,         
        },
        rentWith1house:{
            type:Number,          
        },
        rentWith2house:{
            type:Number,          
        },
        rentWith3house:{
            type:Number,          
        },
        rentWith4house:{
            type:Number,          
        },
        rentWithHotel:{
            type:Number
        },
        hotelCost:{
            type:Number
        },
        houseCost:{
            type:Number
        },
    },
})






const CardModel = mongoose.model('Card', CardSchema)

module.exports = {CardModel};
