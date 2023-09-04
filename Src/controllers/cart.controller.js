const { cartService} = require("../services");


/** create cart */
const createcart = async (req, res) => {
  try {
    const reqBody = req.body;

      console.log(reqBody);

    const cart = await cartService.createcart(reqBody);
    if (!cart) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:"cart is data succesfully",
      data: { cart },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get cart list */
const getCartList = async (req, res) => {
  try {
    const getList = await cartService.getCartList(req, res);

    res.status(200).json({
      success: true,
      message: "Get catogary list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get cart details by id

const getCartDetails = async (req, res) => {
  try {
    const getDetails = await cartService.getCartById(req.params.cartId);
    if (!getDetails) {
      throw new Error("Cart not found!");
    }

    res.status(200).json({
      success: true,
      message: "Cart details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** cart details update by id */
const updateDetails = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const cartExists = await cartService.getCartById(cartId);
    if (!cartExists) {
      throw new Error("Cart not found!");
    }

    await cartService.updateDetails(cartId, req.body);
    res
      .status(200)
      .json({ success: true, message: "Cart details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Cart */
const deletecart = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    if (!cartId) {
      throw new Error("cart not found!");
    }

    await cartService.deletecart(cartId);

    res.status(200).json({
      success: true,
      message: "Cart delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createcart,
  getCartList,
  getCartDetails,
  updateDetails,
  deletecart
};