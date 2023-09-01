const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        Movie_name : {
            type : String,
            trim : true
        },
        Movie_ticket_sit : {
            type : String,
            trim : true
        },
        Movie_Date : {
            type : String,
            trim : true
        },
        Movie_price : {
            type : Number,
            trim : true
        },
        Screen_number : {
            type : Number,
            trim : true
        },
        music : {
            type : mongoose.Types.ObjectId,
            ref : "music"
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

const movie = mongoose.model("movie",movieSchema)

module.exports = movie