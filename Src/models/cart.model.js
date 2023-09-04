const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        total:{
            type:Number,
            trim:true
        },
            quantity:{
            type: String,
            trim:true,
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
        },
        product:{
            type:mongoose.Types.ObjectId,
            ref:'product'
        },
        order:{
            type:mongoose.Types.ObjectId,
            ref:"order"
        },
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const Cart = mongoose.model("cart",cartSchema)

module.exports = Cart