// services/movieService.js
const { Movie } = require('../models/movie.model');

class MovieService {
  async getAllMovies() {
    return Movie.find();
  }

  async getMovieById(id) {
    return Movie.findById(id);
  }

  async addMovie(newMovie) {
    const movie = new Movie(newMovie);
    return movie.save();
  }

  async updateMovie(id, updatedMovie) {
    return Movie.findByIdAndUpdate(id, updatedMovie, { new: true });
  }

  async deleteMovie(id) {
    return Movie.findByIdAndRemove(id);
  }
}

module.exports = new MovieService();
