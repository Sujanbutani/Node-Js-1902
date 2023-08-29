const { groceryService} = require("../services");

/** create grocery */
const createGrocery = async (req, res) => {
  try {
    const reqBody = req.body;

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
      message: "Get grocery list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get grocery details by id

const getGroceryDetails = async (req, res) => {
  try {
    const getDetails = await groceryService.getGroceryById(req.params.groceryId);
    if (!getDetails) {
      throw new Error("Grocery not found!");
    }

    res.status(200).json({
      success: true,
      message: "Grocery details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** grocery details update by id */
const updateDetails = async (req, res) => {
  try {
    const groceryId = req.params.groceryId;
    const groceryExists = await groceryService.getGroceryById(groceryId);
    if (!groceryExists) {
      throw new Error("Grocery not found!");
    }

    await groceryService.updateDetails(groceryId, req.body);
    res
      .status(200)
      .json({ success: true, message: "Grocery details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete grocery */
const deletegrocery = async (req, res) => {
  try {
    const groceryId = req.params.groceryId;
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
  getGroceryDetails,
  updateDetails,
  deletegrocery
};