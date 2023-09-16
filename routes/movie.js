let express = require('express');
let router = express.Router();
const Authentication = require('../middlewares/Authentication');
const Controller = require('../controllers/movie');

// Route to get all movies
router.get('/', Controller.showAllMovies);
router.use(Authentication);

// Route to create a new movie
router.post('/', Controller.createMovie);

// Route to get a specific movie by ID
router.get('/:id', Controller.getMovie);

// Route to update a specific movie by ID
router.put('/:id', Controller.updateMovie);

// Route to delete a specific movie by ID
router.delete('/:id', Controller.deleteMovie);

module.exports = router;
