const joi =require("joi")

/** create movie */
const createmovie = {
    body: joi.object().keys({
      Movie_name: joi.string().required().trim(),
      Movie_ticket_sit: joi.string().required().trim(),
      Movie_Date: joi.string().required().trim(),
      Movie_price: joi.number().integer().required(),
      Screen_number: joi.number().integer().required(),
    }),
  };

  module.exports = {
    createmovie
  };