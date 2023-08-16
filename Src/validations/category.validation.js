const joi =require("joi")

/** create user */
const createcategory = {
    body: joi.object().keys({
      category_name: joi.string().required().trim(),
      category_desc: joi.string().required().trim(),
    }),
  };

  module.exports = {
    createcategory
  };