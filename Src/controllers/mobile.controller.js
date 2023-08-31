const { mobileService} = require("../services");

/** create mobile */
const createMobile = async (req, res) => {
  try {
    const reqBody = req.body;

    const mobile = await mobileService.createMobile(reqBody);
    if (!mobile) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'mobile Create Successfully',
      data: { mobile },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get mobile list */
const getMobileList = async (req, res) => {
  try {
    const getList = await mobileService.getMobileList(req, res);

    res.status(200).json({
      success: true,
      message: "Get mobile list successfully!",
      data: {getList},
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get mobile details by id

const getMobileDetails = async (req, res) => {
  try {
    const getDetails = await mobileService.getMobileById(req.params.mobileId);
    if (!getDetails) {
      throw new Error("Mobile not found!");
    }

    res.status(200).json({
      success: true,
      message: "Mobile details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** mobile details update by id */
const updateDetails = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileExists = await mobileService.getMobileById(mobileId);
    if (!mobileExists) {
      throw new Error("Mobile not found!");
    }

    await mobileService.updateDetails(mobileId, req.body);
    res
      .status(200)
      .json({ success: true, message: "Mobile details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete mobile */
const deletemobile = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    if (!mobileId) {
      throw new Error("Mobile not found!");
    }

    await mobileService.deletemobile(mobileId);

    res.status(200).json({
      success: true,
      message: "Mobile delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createMobile,
  getMobileList,
  getMobileDetails,
  updateDetails,
  deletemobile
};