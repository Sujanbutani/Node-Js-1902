const { categoryService} = require("../services");


/** create category */
const createcategory = async (req, res) => {
  try {
    const reqBody = req.body;

      console.log(reqBody);

    const category = await categoryService.createcategory(reqBody);
    if (!category) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:"category is data succesfully",
      data: { category },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get category list */
const getCategoryList = async (req, res) => {
  try {
    const getList = await categoryService.getCategoryList(req, res);

    res.status(200).json({
      success: true,
      message: "Get catogary list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get category details by id

const getCategoryDetails = async (req, res) => {
  try {
    const getDetails = await categoryService.getCategoryById(req.params.categoryId);
    if (!getDetails) {
      throw new Error("Category not found!");
    }

    res.status(200).json({
      success: true,
      message: "Category details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** category details update by id */
const updateDetails = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const categoryExists = await categoryService.getCategoryById(categoryId);
    if (!categoryExists) {
      throw new Error("Category not found!");
    }

    await categoryService.updateDetails(categoryId, req.body);
    res
      .status(200)
      .json({ success: true, message: "Category details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Category */
const deletecategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    if (!categoryId) {
      throw new Error("category not found!");
    }

    await categoryService.deletecategory(categoryId);

    res.status(200).json({
      success: true,
      message: "Category delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createcategory,
  getCategoryList,
  getCategoryDetails,
  updateDetails,
  deletecategory
};