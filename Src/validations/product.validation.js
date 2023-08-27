const joi =require("joi")

/** create product */
const createproduct = {
    body: joi.object().keys({
      Product_name: joi.string().required().trim(),
      Product_desc: joi.string().required().trim(),
      Product_price: joi.number().integer().required(),
      Product_category: joi.string().required().trim(),
      Product_quality: joi.string().required().trim(),
      Product_stock: joi.number().integer().required(),
    }),
  };

  module.exports = {
    createproduct
  };