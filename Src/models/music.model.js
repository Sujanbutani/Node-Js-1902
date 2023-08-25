const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema(
    {
        Music_name : {
            type : String,
            trim : true
        },
        Singer_name : {
            type : String,
            trim : true
        },
        Lyrics : {
            type : String,
            trim : true
        },
        Album_Song : {
            type : String,
            trim : true
        },
        Music_director : {
            type : String,
            trim : true
        },
        Music_composers : {
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

const music = mongoose.model("music",musicSchema)

module.exports = music