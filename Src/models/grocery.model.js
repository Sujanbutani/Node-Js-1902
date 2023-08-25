const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema(
    {
        Grocery_name : {
            type : String,
            trim : true
        },
        Grocery_item : {
            type : String,
            trim : true
        },
        Grocery_Price : {
            type : Number,
            trim : true
        },
        Grocery_Features : {
            type : String,
            trim : true
        },
        Grocery_Overview : {
            type : String,
            trim : true
        },
        is_active :{
            type : Boolean,
            default : true
        },
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const grocery = mongoose.model("grocery",grocerySchema)

module.exports = grocery