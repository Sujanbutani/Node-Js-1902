const express = require("express");
const { movieController } = require("../../controllers");

const router = express.Router();

/** create movie */
router.post(
  "/create-movie",
  movieController.createMovie
);

/** Get movie list */
router.get(
  "/list",
  movieController.getMovieList
);

/** Get movie details by id */
router.get(
  "/get-details/:movieId",
  movieController.getMovieDetails
);

/** upadate movie */
router.put(
  "/update-details/:movieId",
  movieController.updateDetails
);

/**  Delete movie */
router.delete(
  "/delete-movie/:movieId",
  movieController.deletemovie
);

module.exports = router;