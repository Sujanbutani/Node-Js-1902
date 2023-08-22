const { Book } = require("../models");

/**
 * Create Book
 * @param {object} reqBody
 * @returns {Promise<category>}
 */
const createbook = async (reqBody) => {
  return Book.create(reqBody);
};

module.exports = {
    createbook
};