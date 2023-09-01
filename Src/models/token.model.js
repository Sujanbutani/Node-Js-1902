const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
    {
        token : {
            type : String
        },
        expire_date : {
            type : Date,
            default : null
        },
        user : {
            type : mongoose.Types.ObjectId,
            ref : "User"
        },
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const Token = mongoose.model("Token", tokenSchema);
module.exports = Token;