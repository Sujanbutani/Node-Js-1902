const{ Category}=require("../models")

const getList = async (req, res) => {
    return Category.find()
  };

module.exports={
  getList
}