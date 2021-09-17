/* eslint-disable no-underscore-dangle, no-console, class-methods-use-this */
const Validator = require('fastest-validator');

const FV = new Validator();
const exceptions = require('../exceptions/index');


class ParamsValidator {
  customValidation(target, schema) {
    const validated = FV.validate(target, schema);
    if (Array.isArray(validated)) {
      throw new exceptions.InvalidUserInput(validated);
    }
  }
}

module.exports = ParamsValidator;
