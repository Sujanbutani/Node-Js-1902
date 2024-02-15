// models/movie.js
const mongoose = require('mongoose');
const Joi = require('joi');

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Movie = mongoose.model('Movie', movieSchema);

function validateMovie(movie) {
  const schema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    description: Joi.string().required(),
    popularity: Joi.number().min(0).required(),
    releaseDate: Joi.string().required(),
    rating: Joi.number().min(0).max(10).required(),
  });

  return schema.validate(movie);
}

module.exports = {
  Movie,
  validateMovie,
};
