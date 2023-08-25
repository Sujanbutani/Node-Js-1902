const joi =require("joi")

/** create music */
const createmusic = {
    body: joi.object().keys({
      Music_name: joi.string().required().trim(),
      Singer_name: joi.string().required().trim(),
      Lyrics: joi.string().required().trim(),
      Album_Song: joi.string().required().trim(),
      Music_director: joi.string().required().trim(),
      Music_composers: joi.string().required().trim(),
    }),
  };

  module.exports = {
    createmusic
  };