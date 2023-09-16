const errorHandler = async (error, req, res, next) => {
  switch (error.name) {
    case 'User_NOT_VALID':
    case 'ValidationError':
      res.status(400).json({
        statusCode: 400,
        message: 'Validation error',
        errors: error.errors,
      });
      break;
    case 'NotFoundError':
      res.status(404).json({
        statusCode: 404,
        message: 'Resource not found',
      });
      break;
    case 'DuplicateError':
      res.status(409).json({
        statusCode: 409,
        message: 'Resource already exists',
      });
      break;
    case 'JsonWebTokenError':
    case 'TokenExpiredError':
    case 'UnauthorizedError':
      res.status(401).json({
        statusCode: 401,
        message: 'Unauthorized access',
      });
      break;
    case 'User_NOT_VALID':
      res.status(401).json({
        message: 'Invalid email or password',
      });
      break;
    default:
      res.status(500).json({
        statusCode: 500,
        message: 'Internal server error',
      });
      break;
  }
};

module.exports = errorHandler;
