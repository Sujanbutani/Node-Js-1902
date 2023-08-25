const { schoolService} = require("../services");


/** create school */
const createSchool = async (req, res) => {
  try {
    const reqBody = req.body;
    // const schoolExists = await schoolService.getschoolByEmail(reqBody.email);
    // if (schoolExists) {
    //   throw new Error("school already created by this email!");
    // }

    const school = await schoolService.createSchool(reqBody);
    if (!school) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'school Create Successfully',
      data: { school },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get school list */
const getSchoolList = async (req, res) => {
  try {
    const getList = await schoolService.getSchoolList(req, res);

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete school */
const deleteschool = async (req, res) => {
  try {
    const schoolId = req.params.schoolId;
    // const userExists = await userService.getUserById(userId);
    if (!schoolId) {
      throw new Error("School not found!");
    }

    await schoolService.deleteschool(schoolId);

    res.status(200).json({
      success: true,
      message: "School delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSchool,
  getSchoolList,
  deleteschool
};