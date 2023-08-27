const { userService} = require("../services");

/** create user */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    // const userExists = await userService.getuserByEmail(reqBody.email);
    // if (userExists) {
    //   throw new Error("user already created by this email!");
    // }

    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'user Create Successfully',
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get user list */
const getUserList = async (req, res) => {
  try {
    const getList = await userService.getUserList(req, res);

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete user */
const deleteuser = async (req, res) => {
  try {
    const userId = req.params.userId;
    // const userExists = await userService.getUserById(userId);
    if (!userId) {
      throw new Error("User not found!");
    }

    await userService.deleteuser(userId);

    res.status(200).json({
      success: true,
      message: "User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createUser,
  getUserList,
  deleteuser
};