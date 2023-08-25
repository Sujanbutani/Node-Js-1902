const joi =require("joi")

/** create travel */
const createtravel = {
    body: joi.object().keys({
      Travel_type: joi.string().required().trim(),
      Travel_from: joi.string().required().trim(),
      Travel_to: joi.string().required().trim(),
      Travel_Date: joi.string().required().trim(),
      Travel_Return: joi.string().required().trim(),
    }),
  };

  module.exports = {
    createtravel
  };