const Joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envVarsSchema = Joi.object({
<<<<<<< HEAD
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().trim().description("Mongodb url")
}).unknown();

=======
  PORT: Joi.number().default(3000),
  MONGODB_URL: Joi.string().trim().description("Mongodb url"),
}).unknown();

// const aa=envVarsSchema
// .prefs({ errors: { label: "key" } })
// .validate(process.env);
// console.log(aa);
>>>>>>> 6c227765286340479432a94662befdae2ca0ef97

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);
<<<<<<< HEAD
 
// console.log(envVars);

  module.exports = {
    port: envVars.PORT,
    mongodb: {
      url:envVars.MONGODB_URL,
=======

module.exports = {
    port: envVars.PORT,
    mongodb: {
      url: envVars.MONGODB_URL,
>>>>>>> 6c227765286340479432a94662befdae2ca0ef97
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 6c227765286340479432a94662befdae2ca0ef97
};