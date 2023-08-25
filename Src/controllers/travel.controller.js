const { travelService} = require("../services");

/** create travel */
const createTravel = async (req, res) => {
  try {
    const reqBody = req.body;
    // const travelExists = await travelService.gettravelByEmail(reqBody.email);
    // if (travelExists) {
    //   throw new Error("travel already created by this email!");
    // }

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
      message: "Get user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete travel */
const deletetravel = async (req, res) => {
  try {
    const travelId = req.params.travelId;
    // const userExists = await userService.getUserById(userId);
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
  deletetravel
};