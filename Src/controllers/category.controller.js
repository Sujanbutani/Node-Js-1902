const { categoryService} = require("../services");


/** create category */
const createcategory = async (req, res) => {
  try {
    const reqBody = req.body;

      console.log(reqBody);
    // const categoryExists = await categoryService.getcategoryByEmail(reqBody.email);
    // if (categoryExists) {
    //   throw new Error("category already created by this email!");
    // }

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
module.exports = {
  createcategory
};