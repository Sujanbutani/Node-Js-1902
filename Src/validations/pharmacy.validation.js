const joi =require("joi")

/** create pharmacy */
const createpharmacy = {
    body: joi.object().keys({
      Company_name: joi.string().required().trim(),
      Medicine_name: joi.string().required().trim(),
      Medicine_price: joi.number().integer().required(),
      Medicine_power: joi.number().integer().required(),
    }),
  };

  module.exports = {
    createpharmacy
  };