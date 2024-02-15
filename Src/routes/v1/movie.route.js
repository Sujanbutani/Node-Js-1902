// routes/movieRoutes.js
const express = require('express');
const movieController = require('../../controllers/movie.controller');

const router = express.Router();

// Define routes
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', movieController.addMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
