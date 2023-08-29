const { product } = require("../models");

/**
 * Create product
 * @param {object} reqBody
 * @returns {Promise<product>}
 */
const createProduct = async (reqBody) => {
  return product.create(reqBody);
};

const getProductList = async(req, res)=>{
  return product.find({$or : [{is_active : true}]});
};

const getProductById = async (productId) => {
  return product.findById(productId);
};

const updateDetails = async (productId, updateBody) => {
  return product.findByIdAndUpdate(productId, { $set: updateBody });
};

const deleteproduct = async(ProductId) => {
  return product.findByIdAndDelete(ProductId);
};

module.exports = {
  createProduct,
  getProductList,
  getProductById,
  updateDetails,
  deleteproduct
};