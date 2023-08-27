const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        Frist_name : {
            type : String,
            trim : true
        },
        Last_name : {
            type : String,
            trim : true
        },
        Email : {
            type : String,
            trim : true
        },
        Password : {
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

const user = mongoose.model("user",userSchema)

module.exports = user