const joi =require("joi")

/** create jewellery */
const createjewellery = {
    body: joi.object().keys({
      Jewellery_name: joi.string().required().trim(),
      jewellery_caret: joi.number().integer().required(),
      jewellery_Price: joi.number().integer().required(),
      jewellery_wight: joi.string().required().trim(),
      Jewellery_Category: joi.string().required().trim(),
    }),
  };

  module.exports = {
    createjewellery
  };