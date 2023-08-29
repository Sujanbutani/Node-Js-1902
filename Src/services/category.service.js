const { Category } = require("../models");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<category>}
 */
const createcategory = async (reqBody) => {
  return Category.create(reqBody);
};

const getCategoryList = async(req, res)=>{
  return Category.find({$or : [{is_active : false}]});
};

const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

const updateDetails = async (categoryId, updateBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

const deletecategory = async(CategoryId) => {
  return Category.findByIdAndDelete(CategoryId);
};

module.exports = {
  createcategory,
  getCategoryList,
  getCategoryById,
  updateDetails,
  deletecategory
};