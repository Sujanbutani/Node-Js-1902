const joi =require("joi")

/** create stationary */
const createstationary = {
    body: joi.object().keys({
      Stationary_name: joi.string().required().trim(),
      Stationary_price: joi.number().integer().required(),
      Stationary_items: joi.string().required().trim(),
    }),
  };

  module.exports = {
    createstationary
  };