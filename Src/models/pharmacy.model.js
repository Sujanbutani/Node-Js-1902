const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema(
    {
        Company_name : {
            type : String,
            trim : true
        },
        Medicine_name : {
            type : String,
            trim : true
        },
        Medicine_price : {
            type : Number,
            trim : true
        },
        Medicine_power : {
            type : Number,
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

const pharmacy = mongoose.model("pharmacy",pharmacySchema)

module.exports = pharmacy