const Joi = require("Jio");
const dotenv = require("dotenv");

const envVarsSchema = Joi.object({
  PORT: Joi.number().default(3000),
  MONGODB_URL: Joi.string().trim().description("Mongodb url")
});

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  console.log("Config Error: ", error);
}
module.exports = {
    port: envVars.PORT,
    mongodb: {
      url: envVars.MONGODB_URL,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }
}