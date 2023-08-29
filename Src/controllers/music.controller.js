const { musicService} = require("../services");

/** create music */
const createMusic = async (req, res) => {
  try {
    const reqBody = req.body;

    const music = await musicService.createMusic(reqBody);
    if (!music) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'music Create Successfully',
      data: { music },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get music list */
const getMusicList = async (req, res) => {
  try {
    const getList = await musicService.getMusicList(req, res);

    res.status(200).json({
      success: true,
      message: "Get music list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get music details by id

const getMusicDetails = async (req, res) => {
  try {
    const getDetails = await musicService.getMusicById(req.params.musicId);
    if (!getDetails) {
      throw new Error("Music not found!");
    }

    res.status(200).json({
      success: true,
      message: "Music details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** music details update by id */
const updateDetails = async (req, res) => {
  try {
    const musicId = req.params.musicId;
    const musicExists = await musicService.getMusicById(musicId);
    if (!musicExists) {
      throw new Error("Music not found!");
    }

    await musicService.updateDetails(musicId, req.body);
    res
      .status(200)
      .json({ success: true, message: "Music details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete music */
const deletemusic = async (req, res) => {
  try {
    const musicId = req.params.musicId;
    if (!musicId) {
      throw new Error("Music not found!");
    }

    await musicService.deletemusic(musicId);

    res.status(200).json({
      success: true,
      message: "Music delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createMusic,
  getMusicList,
  updateDetails,
  getMusicDetails,
  deletemusic
};