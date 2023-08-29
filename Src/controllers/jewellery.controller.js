const { jewelleryService} = require("../services");

/** create jewellery */
const createJewellery = async (req, res) => {
  try {
    const reqBody = req.body;

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
      message: "Get jewellery list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get jewellery details by id

const getJewelleryDetails = async (req, res) => {
  try {
    const getDetails = await jewelleryService.getJewelleryById(req.params.jewelleryId);
    if (!getDetails) {
      throw new Error("Jewellery not found!");
    }

    res.status(200).json({
      success: true,
      message: "Jewellery details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** jewellery details update by id */
const updateDetails = async (req, res) => {
  try {
    const jewelleryId = req.params.jewelleryId;
    const jewelleryExists = await jewelleryService.getJewelleryById(jewelleryId);
    if (!jewelleryExists) {
      throw new Error("Jewellery not found!");
    }

    await jewelleryService.updateDetails(jewelleryId, req.body);
    res
      .status(200)
      .json({ success: true, message: "Jewellery details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete jewellery */
const deletejewellery = async (req, res) => {
  try {
    const jewelleryId = req.params.jewelleryId;
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
  getJewelleryDetails,
  updateDetails,
  deletejewellery
};