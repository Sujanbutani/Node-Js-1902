const { busService} = require("../services");


/** create bus */
const createBus = async (req, res) => {
  try {
    const reqBody = req.body;
    // const busExists = await busService.getbusByEmail(reqBody.email);
    // if (busExists) {
    //   throw new Error("bus already created by this email!");
    // }

    const bus = await busService.createBus(reqBody);
    if (!bus) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'bus Create Successfully',
      data: { bus },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get bus list */
const getBusList = async (req, res) => {
  try {
    const getList = await busService.getBusList(req, res);

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete bus */
const deletebus = async (req, res) => {
  try {
    const busId = req.params.busId;
    // const userExists = await userService.getUserById(userId);
    if (!busId) {
      throw new Error("Bus not found!");
    }

    await busService.deletebus(busId);

    res.status(200).json({
      success: true,
      message: "BUs delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createBus,
  getBusList,
  deletebus
};