const { Movie } = require('../models');
const ControllerMovie = require('../controllers/movie');

describe('ControllerMovie', () => {
  describe('showAllMovies', () => {
    it('should return all movies', async () => {
      const movieList = [
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
      ];
      Movie.findAll = jest.fn().mockResolvedValue(movieList);

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await ControllerMovie.showAllMovies(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        statusCode: 200,
        data: movieList,
      });
    });

    it('should handle error', async () => {
      const error = new Error('Internal Server Error');
      Movie.findAll = jest.fn().mockRejectedValue(error);

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await ControllerMovie.showAllMovies(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe('createMovie', () => {
    it('should create a new movie', async () => {
      const newMovie = { id: 1, title: 'New Movie' };
      Movie.create = jest.fn().mockResolvedValue(newMovie);

      const req = { body: { title: 'New Movie' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await ControllerMovie.createMovie(req, res, next);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        statusCode: 201,
        message: 'Movie created successfully',
        data: newMovie,
      });
    });

    it('should handle error', async () => {
      const error = new Error('Internal Server Error');
      Movie.create = jest.fn().mockRejectedValue(error);

      const req = { body: { title: 'New Movie' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await ControllerMovie.createMovie(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe('getMovie', () => {
    it('should return a movie by ID', async () => {
      const movieId = 2;
      const movie = { id: movieId };
      Movie.findByPk = jest.fn().mockResolvedValue(movie);

      const req = { params: { id: movieId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await ControllerMovie.getMovie(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        statusCode: 200,
        data: movie,
      });
    });

    it('should return error if movie is not found', async () => {
      const movieId = 1;
      Movie.findByPk = jest.fn().mockResolvedValue(null);

      const req = { params: { id: movieId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await ControllerMovie.getMovie(req, res, next);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        statusCode: 404,
        message: 'Movie not found',
      });
    });

    it('should handle error', async () => {
      const movieId = 1;
      const error = new Error('Internal Server Error');
      Movie.findByPk = jest.fn().mockRejectedValue(error);

      const req = { params: { id: movieId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await ControllerMovie.getMovie(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe('updateMovie', () => {
    it('should update a movie by ID', async () => {
      const movieId = 1;
      const updatedMovie = { id: movieId, title: 'Updated Movie' };
      Movie.findByPk = jest.fn().mockResolvedValue(updatedMovie);
      Movie.prototype.update = jest.fn().mockResolvedValue(updatedMovie);

      const req = { params: { id: movieId }, body: { title: 'Updated Movie' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await ControllerMovie.updateMovie(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        statusCode: 200,
        message: 'Movie updated successfully',
        data: updatedMovie,
      });
    });

    it('should return error if movie is not found', async () => {
      const movieId = 1;
      Movie.findByPk = jest.fn().mockResolvedValue(null);

      const req = { params: { id: movieId }, body: { title: 'Updated Movie' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await ControllerMovie.updateMovie(req, res, next);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        statusCode: 404,
        message: 'Movie not found',
      });
    });

    it('should handle error', async () => {
      const movieId = 1;
      const error = new Error('Internal Server Error');
      Movie.findByPk = jest.fn().mockResolvedValue({});
      Movie.prototype.update = jest.fn().mockRejectedValue(error);

      const req = { params: { id: movieId }, body: { title: 'Updated Movie' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await ControllerMovie.updateMovie(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe('deleteMovie', () => {
    it('should delete a movie by ID', async () => {
      const movieId = 1;
      const movie = { id: movieId, title: 'Movie 1' };
      Movie.findByPk = jest.fn().mockResolvedValue(movie);
      movie.destroy = jest.fn();

      const req = { params: { id: movieId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await ControllerMovie.deleteMovie(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        statusCode: 200,
        message: 'Movie deleted successfully',
      });
    });

    it('should return error if movie is not found', async () => {
      const movieId = 1;
      Movie.findByPk = jest.fn().mockResolvedValue(null);

      const req = { params: { id: movieId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await ControllerMovie.deleteMovie(req, res, next);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        statusCode: 404,
        message: 'Movie not found',
      });
    });

    it('should handle error', async () => {
      const movieId = 1;
      const error = new Error('Internal Server Error');
      Movie.findByPk = jest.fn().mockResolvedValue({});
      Movie.destroy = jest.fn().mockRejectedValue(error);

      const req = { params: { id: movieId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await ControllerMovie.deleteMovie(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
