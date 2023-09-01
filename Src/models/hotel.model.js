const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
    {
        Hotel_name : {
            type : String,
            trim : true
        },
        Customer_name : {
            type : String,
            trim : true
        },
        Room_number : {
            type : Number,
            trim : true
        },
        Customer_checkin : {
            type : String,
            trim : true
        },
        Customer_checkout : {
            type : String,
            trim : true
        },
        Hotel_address : {
            type : String,
            trim : true
        },
        travel : {
            type : mongoose.Types.ObjectId,
            ref : "travel"
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

const hotel = mongoose.model("hotel",hotelSchema)

module.exports = hotel