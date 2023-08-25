const joi =require("joi")

/** create bus */
const createhotel = {
    body: joi.object().keys({
      Hotel_name: joi.string().required().trim(),
      Customer_name: joi.string().required().trim(),
      Room_number: joi.number().integer().required(),
      Customer_checkin: joi.string().required().trim(),
      Customer_checkout: joi.string().required().trim(),
      Hotel_address: joi.string().required().trim(),

    }),
  };

  module.exports = {
    createhotel
  };