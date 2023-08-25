const express = require("express");
// const { userValidation } = require("../../validations");
const { movieController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create movie */
router.post(
  "/create-movie",
  // validate(movieValidation.createmovie),
  movieController.createMovie
);

/** Get movie list */
router.get(
  "/list",
  // validate(movieValidation.getmovieList),
  movieController.getMovieList
);

/**  Delete movie */
router.delete(
  "/delete-movie/:movieId",
  // validate(movieValidation.getmovieList),
  movieController.deletemovie
);

module.exports = router;