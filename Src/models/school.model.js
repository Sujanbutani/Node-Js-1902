const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
    {
        School_name : {
            type : String,
            trim : true
        },
        Student_name : {
            type : String,
            trim : true
        },
        Student_id : {
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
const school = mongoose.model("school",schoolSchema)

module.exports = school