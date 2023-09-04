const joi =require("joi")

/** create user */
const createcart = {
    body: joi.object().keys({
        total: joi.number().required(),
        quantity : joi.string().required().trim()
    }),
  };

  module.exports = {
    createcart
  };