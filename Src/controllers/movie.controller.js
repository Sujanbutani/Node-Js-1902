const { movieService} = require("../services");

/** create movie */
const createMovie = async (req, res) => {
  try {
    const reqBody = req.body;
    // const movieExists = await movieService.getmovieByEmail(reqBody.email);
    // if (movieExists) {
    //   throw new Error("movie already created by this email!");
    // }

    const movie = await movieService.createMovie(reqBody);
    if (!movie) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'movie Create Successfully',
      data: { movie },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get movie list */
const getMovieList = async (req, res) => {
  try {
    const getList = await movieService.getMovieList(req, res);

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete movie */
const deletemovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    // const userExists = await userService.getUserById(userId);
    if (!movieId) {
      throw new Error("Movie not found!");
    }

    await movieService.deletemovie(movieId);

    res.status(200).json({
      success: true,
      message: "Movie delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createMovie,
  getMovieList,
  deletemovie
};