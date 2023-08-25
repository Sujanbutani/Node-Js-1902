const joi =require("joi")

/** create bus */
const createschool = {
    body: joi.object().keys({
      School_name: joi.string().required().trim(),
      Student_name: joi.string().required().trim(),
      Student_id: joi.number().integer().required(),

    }),
  };

  module.exports = {
    createschool
  };