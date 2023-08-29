const { productService} = require("../services");

/** create product */
const createProduct = async (req, res) => {
  try {
    const reqBody = req.body;

    const product = await productService.createProduct(reqBody);
    if (!product) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'product Create Successfully',
      data: { product },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get product list */
const getProductList = async (req, res) => {
  try {
    const getList = await productService.getProductList(req, res);

    res.status(200).json({
      success: true,
      message: "Get product list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get product details by id

const getProductDetails = async (req, res) => {
  try {
    const getDetails = await productService.getProductById(req.params.productId);
    if (!getDetails) {
      throw new Error("Product not found!");
    }

    res.status(200).json({
      success: true,
      message: "Product details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** product details update by id */
const updateDetails = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productExists = await productService.getProductById(productId);
    if (!productExists) {
      throw new Error("Product not found!");
    }

    await productService.updateDetails(productId, req.body);
    res
      .status(200)
      .json({ success: true, message: "Product details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete product */
const deleteproduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    if (!productId) {
      throw new Error("Product not found!");
    }

    await productService.deleteproduct(productId);

    res.status(200).json({
      success: true,
      message: "Product delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createProduct,
  getProductList,
  updateDetails,
  getProductDetails,
  deleteproduct
};