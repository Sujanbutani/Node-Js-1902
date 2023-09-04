const joi =require("joi")

/** create order */
const createorder = {
    body: joi.object().keys({
        total: joi.number().required(),
        orderStatus: joi.boolean().required(),
    })
  };

  module.exports = {
    createorder
  };