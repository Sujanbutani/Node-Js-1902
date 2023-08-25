const { stationaryService} = require("../services");

/** create stationary */
const createStationary = async (req, res) => {
  try {
    const reqBody = req.body;
    // const stationaryExists = await stationaryService.getstationaryByEmail(reqBody.email);
    // if (stationaryExists) {
    //   throw new Error("stationary already created by this email!");
    // }

    const stationary = await stationaryService.createStationary(reqBody);
    if (!stationary) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'stationary Create Successfully',
      data: { stationary },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get stationary list */
const getStationaryList = async (req, res) => {
  try {
    const getList = await stationaryService.getStationaryList(req, res);

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete stationary */
const deletestationary = async (req, res) => {
  try {
    const stationaryId = req.params.stationaryId;
    // const userExists = await userService.getUserById(userId);
    if (!stationaryId) {
      throw new Error("Stationary not found!");
    }

    await stationaryService.deletestationary(stationaryId);

    res.status(200).json({
      success: true,
      message: "Stationary delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createStationary,
  getStationaryList,
  deletestationary
};