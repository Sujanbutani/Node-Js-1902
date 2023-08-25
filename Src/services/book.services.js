const { Book } = require("../models");

/**
 * Create book
 * @param {object} reqBody
 * @returns {Promise<book>}
 */
const createbook = async (reqBody) => {
  return Book.create(reqBody);
};

module.exports = {
  createbook,
};