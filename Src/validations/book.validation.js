const joi =require("joi")

/** create book */
const createbook = {
    body: joi.object().keys({
      book_name: joi.string().required().trim(),
      book_desc: joi.string().required().trim(),
    }),
  };

  module.exports = {
    createbook
  };