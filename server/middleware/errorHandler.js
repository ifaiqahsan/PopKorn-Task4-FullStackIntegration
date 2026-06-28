module.exports = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';

  res.status(statusCode).json({
    message,
    error: process.env.NODE_ENV === 'production' ? undefined : err.stack
  });
};
