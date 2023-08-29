const { pharmacyService} = require("../services");

/** create pharmacy */
const createPharmacy = async (req, res) => {
  try {
    const reqBody = req.body;

    const pharmacy = await pharmacyService.createPharmacy(reqBody);
    if (!pharmacy) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'pharmacy Create Successfully',
      data: { pharmacy },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get pharmacy list */
const getPharmacyList = async (req, res) => {
  try {
    const getList = await pharmacyService.getPharmacyList(req, res);

    res.status(200).json({
      success: true,
      message: "Get pharmacy list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get pharmacy details by id

const getPharmacyDetails = async (req, res) => {
  try {
    const getDetails = await pharmacyService.getPharmacyById(req.params.pharmacyId);
    if (!getDetails) {
      throw new Error("Pharmacy not found!");
    }

    res.status(200).json({
      success: true,
      message: "Pharmacy details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** pharmacy details update by id */
const updateDetails = async (req, res) => {
  try {
    const pharmacyId = req.params.pharmacyId;
    const pharmacyExists = await pharmacyService.getPharmacyById(pharmacyId);
    if (!pharmacyExists) {
      throw new Error("Pharmacy not found!");
    }

    await pharmacyService.updateDetails(pharmacyId, req.body);
    res
      .status(200)
      .json({ success: true, message: "Pharmacy details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete pharmacy */
const deletepharmacy = async (req, res) => {
  try {
    const pharmacyId = req.params.pharmacyId;
    if (!pharmacyId) {
      throw new Error("Pharmacy not found!");
    }

    await pharmacyService.deletepharmacy(pharmacyId);

    res.status(200).json({
      success: true,
      message: "Pharmacy delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createPharmacy,
  getPharmacyList,
  updateDetails,
  getPharmacyDetails,
  deletepharmacy
};