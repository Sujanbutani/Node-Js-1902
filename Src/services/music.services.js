const { music } = require("../models");

/**
 * Create music
 * @param {object} reqBody
 * @returns {Promise<music>}
 */
const createMusic = async (reqBody) => {
  return music.create(reqBody);
};

const getMusicList = async(req, res)=>{
  return music.find()
};

const deletemusic = async(MusicId) => {
  return music.findByIdAndDelete(MusicId);
};

module.exports = {
  createMusic,
  getMusicList,
  deletemusic
};