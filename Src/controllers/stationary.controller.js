const { stationaryService} = require("../services");

/** create stationary */
const createStationary = async (req, res) => {
  try {
    const reqBody = req.body;

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
      message: "Get stationary list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get stationary details by id

const getStationaryDetails = async (req, res) => {
  try {
    const getDetails = await stationaryService.getStationaryById(req.params.stationaryId);
    if (!getDetails) {
      throw new Error("Stationary not found!");
    }

    res.status(200).json({
      success: true,
      message: "Stationary details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** stationary details update by id */
const updateDetails = async (req, res) => {
  try {
    const stationaryId = req.params.stationaryId;
    const stationaryExists = await stationaryService.getStationaryById(stationaryId);
    if (!stationaryExists) {
      throw new Error("Stationary not found!");
    }

    await stationaryService.updateDetails(stationaryId, req.body);
    res
      .status(200)
      .json({ success: true, message: "Stationary details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete stationary */
const deletestationary = async (req, res) => {
  try {
    const stationaryId = req.params.stationaryId;
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
  getStationaryDetails,
  updateDetails,
  deletestationary
};