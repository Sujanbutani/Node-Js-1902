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
  return music.find({$or :[{is_active : false}]})
};

const getMusicById = async (musicId) => {
  return music.findById(musicId);
};

const updateDetails = async (musicId, updateBody) => {
  return music.findByIdAndUpdate(musicId, { $set: updateBody });
};

const deletemusic = async(MusicId) => {
  return music.findByIdAndDelete(MusicId);
};

module.exports = {
  createMusic,
  getMusicList,
  getMusicById,
  updateDetails,
  deletemusic
};