const { musicService} = require("../services");

/** create music */
const createMusic = async (req, res) => {
  try {
    const reqBody = req.body;
    // const musicExists = await musicService.getmusicByEmail(reqBody.email);
    // if (musicExists) {
    //   throw new Error("music already created by this email!");
    // }

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
      message: "Get user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete music */
const deletemusic = async (req, res) => {
  try {
    const musicId = req.params.musicId;
    // const userExists = await userService.getUserById(userId);
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
  deletemusic
};