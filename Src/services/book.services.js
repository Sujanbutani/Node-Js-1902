const { book } = require("../models");

/**
 * Create book
 * @param {object} reqBody
 * @returns {Promise<book>}
 */
const createbook = async (reqBody) => {
  return book.create(reqBody);
};

module.exports = {
  createbook,
};