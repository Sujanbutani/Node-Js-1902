const { Book } = require("../models");

/**
 * Create book
 * @param {object} reqBody
 * @returns {Promise<book>}
 */
const createbook = async (reqBody) => {
  return Book.create(reqBody);
};

const getBookList = async(req, res)=>{
  return Book.find({$or : [{is_active : true}]});
};

const getBookById = async (bookId) => {
  return Book.findById(bookId);
};

const updateDetails = async (bookId, updateBody) => {
  return Book.findByIdAndUpdate(bookId, { $set: updateBody });
};

const deletebook = async(BookId) => {
  return Book.findByIdAndDelete(BookId);
};

module.exports = {
  createbook,
  getBookList,
  getBookById,
  updateDetails,
  deletebook
};