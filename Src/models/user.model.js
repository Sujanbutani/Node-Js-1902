const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        frist_name : {
            type : String,
            trim : true
        },
        last_name : {
            type : String,
            trim : true
        },
        email : {
            type : String,
            trim : true
        },
        password : {
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