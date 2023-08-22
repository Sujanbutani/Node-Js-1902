const { bookService} = require("../services");


/** create user */
const createBook = async (req, res) => {
  try {
    const reqBody = req.body;
    // const userExists = await userService.getUserByEmail(reqBody.email);
    // if (userExists) {
    //   throw new Error("User already created by this email!");
    // }

    const book = await bookService.createbook(reqBody);
    if (!book) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'book Create Successfully',
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createBook
};