const { user } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<user>}
 */
const createUser = async (reqBody) => {
  return user.create(reqBody);
};

const getUserList = async(req, res)=>{
  return user.find({$or : [{is_active : false}]});
};

const deleteuser = async(UserId) => {
  return user.findByIdAndDelete(UserId);
};

module.exports = {
  createUser,
  getUserList,
  deleteuser
};