const { pharmacyService} = require("../services");

/** create pharmacy */
const createPharmacy = async (req, res) => {
  try {
    const reqBody = req.body;
    // const pharmacyExists = await pharmacyService.getpharmacyByEmail(reqBody.email);
    // if (pharmacyExists) {
    //   throw new Error("pharmacy already created by this email!");
    // }

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
      message: "Get user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete pharmacy */
const deletepharmacy = async (req, res) => {
  try {
    const pharmacyId = req.params.pharmacyId;
    // const userExists = await userService.getUserById(userId);
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
  deletepharmacy
};