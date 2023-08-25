const joi =require("joi")

/** create bus */
const createbus = {
    body: joi.object().keys({
      bus_name: joi.string().required().trim(),
      bus_desc: joi.string().required().trim(),
      bus_Root: joi.string().required().trim(),

    }),
  };

  module.exports = {
    createbus
  };