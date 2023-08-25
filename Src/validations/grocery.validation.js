const joi =require("joi")

/** create grocery */
const creategrocery = {
    body: joi.object().keys({
      Grocery_name: joi.string().required().trim(),
      Grocery_item: joi.string().required().trim(),
      Grocery_Price: joi.number().integer().required(),
      Grocery_Features: joi.string().required().trim(),
      Grocery_Overview: joi.string().required().trim(),
    }),
  };

  module.exports = {
    creategrocery
  };