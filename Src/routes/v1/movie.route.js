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

// extra post
router.post('/', (req, res, next) => {
  const movie = new Movie(req.body);

  const promise = movie.save();
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })

});

// extra get
router.get('/top10',(req,res)=>{
  const promise = Movie.find({ }).limit(10).sort({ imdb_score: -1 });

  promise.then((data) =>{
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  })
});

router.get('/:movie_id',(req,res,next)=>{
  const promise = Movie.findById(req.params.movie_id);

  promise.then((movie)=>{
    if (!movie) {

      next({ message: 'The movie was not found.' },{ code: 99});
    } else {
      res.json(movie);
    }
  }).catch((err)=>{
    res.json(err);
  })
});

// extra get
router.get('/',(req,res)=>{
  const promise = Movie.aggregate([
    {
      $lookup: {
        from: 'directors',
        localField: 'director_id',
        foreignField: '_id',
        as: 'director'
      }
    },
    {
      $unwind: '$director'
    }
  ]);

  promise.then((data) =>{
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  })
});




module.exports = router;