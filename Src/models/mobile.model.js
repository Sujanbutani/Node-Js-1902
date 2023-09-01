const mongoose =require("mongoose")

const mobileSchema = new mongoose.Schema({
    shop_name:{
        type:String,
        trim:true
    },
    emi_no:{
        type:Number,
        trim:true
    },
    mobile_company:{
        type:String,
        trim:true
    },
    mobile_model:{
        type:String ,
        trim:true
    },
    mobile_series:{
        type:String,
        trim:true
    },
    bill_no:{
        type : Number,
        trim:true
    },
    location:{
        type:String,
        trim:true
    },
    product : {
        type : mongoose.Types.ObjectId,
        ref : "product"
    },
    is_active:{
        type:Boolean,
        default:true
    }
},
{
    timestamps:true,
    versionKey:false,
});

const mobile =mongoose.model("mobile", mobileSchema)

module.exports= mobile