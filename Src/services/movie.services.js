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
  return movie.find()
};

const deletemovie = async(MovieId) => {
  return movie.findByIdAndDelete(MovieId);
};

module.exports = {
  createMovie,
  getMovieList,
  deletemovie
};