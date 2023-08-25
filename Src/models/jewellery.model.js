const mongoose = require("mongoose");

const jewellerySchema = new mongoose.Schema(
    {
        Jewellery_name : {
            type : String,
            trim : true
        },
        jewellery_caret : {
            type : Number,
            trim : true
        },
        jewellery_Price : {
            type : Number,
            trim : true
        },
        jewellery_wight : {
            type : String,
            trim : true
        },
        Jewellery_Category : {
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

const jewellery = mongoose.model("jewellery",jewellerySchema)

module.exports = jewellery