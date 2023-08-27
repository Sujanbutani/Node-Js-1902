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

const deleteproduct = async(ProductId) => {
  return product.findByIdAndDelete(ProductId);
};

module.exports = {
  createProduct,
  getProductList,
  deleteproduct
};