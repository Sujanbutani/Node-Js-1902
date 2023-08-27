const { categoryService, productService, userService } = require("../services");

/** Get e-commerce list */
const getList = async (req, res) => {
  try {
    const categoryList = await categoryService.getCategoryList();
    const productlist = await productService.getProductList();
    const userList = await userService.getUserList();

    res.status(200).json({
      success: true,
      message: "Get E-commerce list successfully!",
      data: {
        categoryList,
        productlist,
        userList
      }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  getList,
};