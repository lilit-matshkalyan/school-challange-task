const HTTP_STATUS_METHODS = {
  ok: 200,
  created: 201,
  accepted: 202,
  noContent: 204,
  forbidden: 403,
  notFound: 404,
  unauthorized: 401,
  internalServerError: 500,
  serviceNotAvailable: 503,
  unavailableForLegalReasons: 451
};

const PAGINATION = {
  LIMIT: 50,
  OFFSET: 0
};

const ORDER = {
  ASC: 'ASC',
  DESC: 'DESC'
};

module.exports = {
  ORDER,
  PAGINATION,
  HTTP_STATUS_METHODS
};
