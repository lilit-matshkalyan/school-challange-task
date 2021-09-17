/* eslint-disable max-classes-per-file */
const { BASE_ERRORS } = require('./constants');

class BaseError extends Error {}

class InternalServerError extends BaseError {
  constructor(details) {
    super();
    this.details = details;
  }

  getError() {
    let error = BASE_ERRORS.INTERNAL_SERVER_ERROR;
    if (this.details) {
      error = { ...error, details: this.details };
    } else error = { ...error, details: BASE_ERRORS.INTERNAL_SERVER_ERROR.debug };

    return error;
  }
}


class AccessDeniedError extends BaseError {
  constructor(details) {
    super();
    this.details = details;
  }

  getError() {
    let error = BASE_ERRORS.ACCESS_DENIED_ERROR;
    if (this.details) {
      error = { ...error, details: this.details };
    } else error = { ...error, details: BASE_ERRORS.ACCESS_DENIED_ERROR.debug };

    return error;
  }
}


class InvalidUserInput extends BaseError {
  constructor(details) {
    super();
    this.details = details;
  }

  getError() {
    let error = BASE_ERRORS.INVALID_USER_INPUT;
    if (this.details) {
      error = { ...error, details: this.details };
    } else error = { ...error, details: BASE_ERRORS.INVALID_USER_INPUT.debug };

    return error;
  }
}


class SequelizeError extends BaseError {
  constructor(exception) {
    super();
    this.exception = exception;
    this.details = exception.errors ? exception.errors[0].message : exception.message;
  }

  getError() {
    let error = BASE_ERRORS.INVALID_USER_INPUT;
    if (this.details) {
      error = { ...error, details: this.details };
    } else error = { ...error, details: BASE_ERRORS.INVALID_USER_INPUT.debug };

    return error;
  }
}


class ResourceNotFoundError extends BaseError {
  constructor(details) {
    super();
    this.details = details;
  }

  getError() {
    let error = BASE_ERRORS.RESOURCE_NOT_FOUND_ERROR;
    if (this.details) {
      error = { ...error, details: this.details };
    } else error = { ...error, details: BASE_ERRORS.RESOURCE_NOT_FOUND_ERROR.debug };

    return error;
  }
}



module.exports = {
  BaseError,
  SequelizeError,
  InvalidUserInput,
  AccessDeniedError,
  InternalServerError,
  ResourceNotFoundError,
};
