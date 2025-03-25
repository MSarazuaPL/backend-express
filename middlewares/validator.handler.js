const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    req.body;
    req.params;
    req.query;
    const { error } = schema.validate(data, {abortEarly: false});
    if (error) {
      //Para que los middlewares de error puedan manejar el error, se le debe pasar el error a next.
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
