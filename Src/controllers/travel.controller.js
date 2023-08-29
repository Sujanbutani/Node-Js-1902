const { travelService} = require("../services");

/** create travel */
const createTravel = async (req, res) => {
  try {
    const reqBody = req.body;

    const travel = await travelService.createTravel(reqBody);
    if (!travel) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'travel Create Successfully',
      data: { travel },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get travel list */
const getTravelList = async (req, res) => {
  try {
    const getList = await travelService.getTravelList(req, res);

    res.status(200).json({
      success: true,
      message: "Get travel list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get travel details by id

const getTravelDetails = async (req, res) => {
  try {
    const getDetails = await travelService.getTravelById(req.params.travelId);
    if (!getDetails) {
      throw new Error("Travel not found!");
    }

    res.status(200).json({
      success: true,
      message: "Travel details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** travel details update by id */
const updateDetails = async (req, res) => {
  try {
    const travelId = req.params.travelId;
    const travelExists = await travelService.getTravelById(travelId);
    if (!travelExists) {
      throw new Error("Travel not found!");
    }

    await travelService.updateDetails(travelId, req.body);
    res
      .status(200)
      .json({ success: true, message: "Travel details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete travel */
const deletetravel = async (req, res) => {
  try {
    const travelId = req.params.travelId;
    if (!travelId) {
      throw new Error("Travel not found!");
    }

    await travelService.deletetravel(travelId);

    res.status(200).json({
      success: true,
      message: "Travel delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createTravel,
  getTravelList,
  getTravelDetails,
  updateDetails,
  deletetravel
};