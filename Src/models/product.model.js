const mongooes = require("mongooes")

const productSchema = new mongooes.Schema(
    {
        product_name : {
            type : String,
            trim : true
        },
        product_desc : {
            type : String,
            trim : true
        },
        product_category : {
            type : String,
            trim : true
        },
        product_price : {
            type : Number,
            trim : true
        },
        product_quality : {
            type : String,
            trim : true
        },
        product_stock : {
            type : Number,
            trim : true
        },
        is_active : {
            type : Boolean,
            trim : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const Product = mongooes.model("product", productSchema)

module.exports = Product;
