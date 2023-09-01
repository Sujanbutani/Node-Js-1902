const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
    {
        Bus_name : {
            type : String,
            trim : true
        },
        Bus_Number : {
            type : Number,
            trim : true
        },
        Bus_Root : {
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
const bus = mongoose.model("bus",busSchema)

module.exports = bus