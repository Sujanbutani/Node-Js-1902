// controllers/movieController.js
const movieService = require('../services/movie.services');
const { validateMovie } = require('../models/movie.model');

class MovieController {
  async getAllMovies(req, res) {
    try {
      const movies = await movieService.getAllMovies();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getMovieById(req, res) {
    const movieId = req.params.id;

    try {
      const movie = await movieService.getMovieById(movieId);

      if (movie) {
        res.json(movie);
      } else {
        res.status(404).json({ message: 'Movie not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async addMovie(req, res) {
    const { error } = validateMovie(req.body);

    if (error) {
      res.status(400).json({ message: error.details[0].message });
    } else {
      try {
        const newMovie = await movieService.addMovie(req.body);
        res.status(201).json(newMovie);
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  }

  async updateMovie(req, res) {
    const movieId = req.params.id;
    const { error } = validateMovie(req.body);

    if (error) {
      res.status(400).json({ message: error.details[0].message });
    } else {
      try {
        const updatedMovie = await movieService.updateMovie(movieId, req.body);

        if (updatedMovie) {
          res.json(updatedMovie);
        } else {
          res.status(404).json({ message: 'Movie not found' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  }

  async deleteMovie(req, res) {
    const movieId = req.params.id;

    try {
      const deletedMovie = await movieService.deleteMovie(movieId);

      if (deletedMovie) {
        res.json(deletedMovie);
      } else {
        res.status(404).json({ message: 'Movie not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = new MovieController();
