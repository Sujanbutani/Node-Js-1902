const { groceryService} = require("../services");

/** create grocery */
const createGrocery = async (req, res) => {
  try {
    const reqBody = req.body;
    // const groceryExists = await groceryService.getgroceryByEmail(reqBody.email);
    // if (groceryExists) {
    //   throw new Error("grocery already created by this email!");
    // }

    const grocery = await groceryService.createGrocery(reqBody);
    if (!grocery) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'grocery Create Successfully',
      data: { grocery },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get grocery list */
const getGroceryList = async (req, res) => {
  try {
    const getList = await groceryService.getGroceryList(req, res);

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete grocery */
const deletegrocery = async (req, res) => {
  try {
    const groceryId = req.params.groceryId;
    // const userExists = await userService.getUserById(userId);
    if (!groceryId) {
      throw new Error("Grocery not found!");
    }

    await groceryService.deletegrocery(groceryId);

    res.status(200).json({
      success: true,
      message: "Grocery delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createGrocery,
  getGroceryList,
  deletegrocery
};