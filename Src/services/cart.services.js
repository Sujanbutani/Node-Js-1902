const { Cart } = require("../models");

/**
 * Create cart
 * @param {object} reqBody
 * @returns {Promise<cart>}
 */
const createcart = async (reqBody) => {
  return Cart.create(reqBody);
};

const getCartList = async(req, res)=>{
  return Cart.find({$or : [{is_active : true}]});
};

const getCartById = async (cartId) => {
  return Cart.findById(cartId);
};

const updateDetails = async (cartId, updateBody) => {
  return Cart.findByIdAndUpdate(cartId, { $set: updateBody });
};

const deletecart = async(CartId) => {
  return Cart.findByIdAndDelete(CartId);
};

module.exports = {
  createcart,
  getCartList,
  getCartById,
  updateDetails,
  deletecart
};