const mongooes = require("mongooes");

const categorySchema = new mongooes.Schema(
    {
        category_name : {
            type : String,
            trim : true
        },
        category_desc : {
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

const Category = mongooes.model("category",categorySchema)

module.exports = Category