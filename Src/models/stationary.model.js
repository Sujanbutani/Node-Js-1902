const mongoose = require("mongoose");

const stationarySchema = new mongoose.Schema(
    {
        Stationary_name : {
            type : String,
            trim : true
        },
        Stationary_price : {
            type : Number,
            trim : true
        },
        Stationary_items : {
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

const stationary = mongoose.model("stationary",stationarySchema)

module.exports = stationary