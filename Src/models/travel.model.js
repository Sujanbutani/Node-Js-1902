const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema(
    {
        Travel_type : {
            type : String,
            trim : true
        },
        Travel_from : {
            type : String,
            trim : true
        },
        Travel_to : {
            type : String,
            trim : true
        },
        Travel_Date : {
            type : String,
            trim : true
        },
        Travel_Return : {
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

const travel = mongoose.model("travel",travelSchema)

module.exports = travel