const { movieService} = require("../services");

/** create movie */
const createMovie = async (req, res) => {
  try {
    const reqBody = req.body;

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
      message: "Get movie list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get movie details by id

const getMovieDetails = async (req, res) => {
  try {
    const getDetails = await movieService.getMovieById(req.params.movieId);
    if (!getDetails) {
      throw new Error("Movie not found!");
    }

    res.status(200).json({
      success: true,
      message: "Movie details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** movie details update by id */
const updateDetails = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movieExists = await movieService.getMovieById(movieId);
    if (!movieExists) {
      throw new Error("Movie not found!");
    }

    await movieService.updateDetails(movieId, req.body);
    res
      .status(200)
      .json({ success: true, message: "Movie details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete movie */
const deletemovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
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
  getMovieDetails,
  updateDetails,
  deletemovie
};