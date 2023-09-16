const { Movie } = require('../models');

class ControllerMovie {
  static async showAllMovies(req, res, next) {
    try {
      const movieList = await Movie.findAll();
      res.status(200).json({
        statusCode: 200,
        data: movieList,
      });
    } catch (error) {
      next(error);
    }
  }

  static async createMovie(req, res, next) {
    try {
      const newMovie = await Movie.create(req.body);
      res.status(201).json({
        statusCode: 201,
        message: 'Movie created successfully',
        data: newMovie,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getMovie(req, res, next) {
    try {
      const movieId = req.params.id;
      const movie = await Movie.findByPk(movieId);
      if (!movie) {
        return res.status(404).json({
          statusCode: 404,
          message: 'Movie not found',
        });
      }
      res.status(200).json({
        statusCode: 200,
        data: movie,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateMovie(req, res, next) {
    try {
      const movieId = req.params.id;
      const movie = await Movie.findByPk(movieId);
      if (!movie) {
        return res.status(404).json({
          statusCode: 404,
          message: 'Movie not found',
        });
      }
      await movie.update(req.body);
      res.status(200).json({
        statusCode: 200,
        message: 'Movie updated successfully',
        data: movie,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteMovie(req, res, next) {
    try {
      const movieId = req.params.id;
      const movie = await Movie.findByPk(movieId);
      if (!movie) {
        return res.status(404).json({
          statusCode: 404,
          message: 'Movie not found',
        });
      }
      await movie.destroy();
      res.status(200).json({
        statusCode: 200,
        message: 'Movie deleted successfully',
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerMovie;
