const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        book_name : {
            type : String,
            trim : true
        },
        book_desc : {
            type : String,
            trim : true
        },
        stationary : {
            type : mongoose.Types.ObjectId,
            ref : "stationary"
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

const book = mongoose.model("book",bookSchema)

module.exports = book