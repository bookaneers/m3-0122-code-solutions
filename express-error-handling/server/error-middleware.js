const ClientError = require('./client-error');

// function signature - 4 parameters. Must be define this way.
function errorMiddleware(err, req, res, next) {
  // if the error was generator on purpose
  if (err instanceof ClientError) {
    res.status(err.status).json({
      error: err.message
    });
  // of error occur due to something else - code error, database error
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
}
// export middleware
module.exports = errorMiddleware;
