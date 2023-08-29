const { movie } = require("../models");

/**
 * Create movie
 * @param {object} reqBody
 * @returns {Promise<movie>}
 */
const createMovie = async (reqBody) => {
  return movie.create(reqBody);
};

const getMovieList = async(req, res)=>{
  return movie.find({$or :[{is_active : false}]})
};

const getMovieById = async (movieId) => {
  return movie.findById(movieId);
};

const updateDetails = async (movieId, updateBody) => {
  return movie.findByIdAndUpdate(movieId, { $set: updateBody });
};


const deletemovie = async(MovieId) => {
  return movie.findByIdAndDelete(MovieId);
};

module.exports = {
  createMovie,
  getMovieList,
  getMovieById,
  updateDetails,
  deletemovie
};