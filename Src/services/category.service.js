const { Category } = require("../models");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<category>}
 */
const createcategory = async (reqBody) => {
  return Category.create(reqBody);
};

module.exports = {
  createcategory
};