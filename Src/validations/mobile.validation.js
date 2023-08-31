const joi =require("joi");

const createMobile ={
    body: joi.object().keys({
        shop_name : joi.string().required().trim(),
        emi_no : joi.number().required(),
        mobile_company : joi.string().required().trim(),
        mobile_model : joi.string().required().trim(),
        mobile_company : joi.string().required().trim(),
        bill_no:joi.number().required(),
        location: joi.string().required().trim()
    })
}
module.exports={
    createMobile
}