const { grocery } = require("../models");

/**
 * Create grocery
 * @param {object} reqBody
 * @returns {Promise<grocery>}
 */
const createGrocery = async (reqBody) => {
  return grocery.create(reqBody);
};

const getGroceryList = async(req, res)=>{
  return grocery.find()
};

const deletegrocery = async(GroceryId) => {
  return grocery.findByIdAndDelete(GroceryId);
};

module.exports = {
  createGrocery,
  getGroceryList,
  deletegrocery
};