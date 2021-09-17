const SEQUELIZE_ERRORS = {
  SequelizeValidationError: true,
  SequelizeUniqueConstraintError: true,
  SequelizeCheckConstraintError: true,
  SequelizeForeignKeyConstraintError: true,
  SequelizeDatabaseError: true
};

const BASE_ERRORS = {
  BAD_REQUEST: { status: 400, statusName: 'badRequest', debug: 'BAD_REQUEST' },
  EXPIRED_RESOURCE: { status: 400, statusName: 'badRequest', debug: 'EXPIRED_RESOURCE' },
  INVALID_USER_INPUT: { status: 400, statusName: 'badRequest', debug: 'INVALID_USER_INPUT' },
  ACCESS_DENIED_ERROR: { status: 403, statusName: 'forbidden', debug: 'ACCESS_DENIED_ERROR' },
  SOMETHING_WENT_WRONG: { status: 409, statusName: 'forbidden', debug: 'SOMETHING_WENT_WRONG' },
  AUTHENTICATION_ERROR: { status: 401, statusName: 'unauthorized', debug: 'AUTHENTICATION_ERROR' },
  INVALID_PROPERTY_INPUT: { status: 400, statusName: 'badRequest', debug: 'INVALID_PROPERTY_INPUT' },
  RESOURCE_NOT_FOUND_ERROR: { status: 404, statusName: 'notFound', debug: 'RESOURCE_NOT_FOUND_ERROR' },
  INVALID_USER_CREDENTIALS: { status: 400, statusName: 'badRequest', debug: 'INVALID_USER_CREDENTIALS' },
  INTERNAL_SERVER_ERROR: { status: 500, statusName: 'internalServerError', debug: 'INTERNAL_SERVER_ERROR' },
  SERVICE_NOT_AVAILABLE: { status: 503, statusName: 'serviceNotAvailable', debug: 'SERVICE_NOT_AVAILABLE' },
  RESOURCE_DUPLICATION_ERROR: { status: 400, statusName: 'badRequest', badRequest: 'RESOURCE_DUPLICATION_ERROR' },
  REQUIRED_PARAMETER_NOT_PROVIDED: { status: 400, statusName: 'badRequest', debug: 'REQUIRED_PARAMETER_NOT_PROVIDED' },
  UNAVAILABLE_FOR_LEGAL_REASONS: { status: 451, statusName: 'unavailableForLegalReasons', debug: 'UNAVAILABLE_FOR_LEGAL_REASONS' }
};

module.exports = {
  BASE_ERRORS,
  SEQUELIZE_ERRORS
};
