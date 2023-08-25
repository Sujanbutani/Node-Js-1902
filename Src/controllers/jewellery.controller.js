const { jewelleryService} = require("../services");

/** create jewellery */
const createJewellery = async (req, res) => {
  try {
    const reqBody = req.body;
    // const jewelleryExists = await jewelleryService.getjewelleryByEmail(reqBody.email);
    // if (jewelleryExists) {
    //   throw new Error("jewellery already created by this email!");
    // }

    const jewellery = await jewelleryService.createJewellery(reqBody);
    if (!jewellery) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'jewellery Create Successfully',
      data: { jewellery },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get jewellery list */
const getJewelleryList = async (req, res) => {
  try {
    const getList = await jewelleryService.getJewelleryList(req, res);

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete jewellery */
const deletejewellery = async (req, res) => {
  try {
    const jewelleryId = req.params.jewelleryId;
    // const userExists = await userService.getUserById(userId);
    if (!jewelleryId) {
      throw new Error("Jewellery not found!");
    }

    await jewelleryService.deletejewellery(jewelleryId);

    res.status(200).json({
      success: true,
      message: "Jewellery delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createJewellery,
  getJewelleryList,
  deletejewellery
};