const joi =require("joi")

/** create user */
const createuser = {
    body: joi.object().keys({
      Frist_name: joi.string().required().trim(),
      Last_name: joi.string().required().trim(),
      Email: joi.string().required().trim(),
      Password: joi.string().required().trim(),
    }),
  };

  module.exports = {
    createuser
  };