const { PAGINATION } = require('./constants');


const parseQueryParams = (params) => {
  let {
    order, sort, filter, offset, limit
  } = params;
  const { search = '' } = params;
  filter = filter || {};
  filter = (typeof filter === 'string' || filter instanceof String)
    ? JSON.parse(filter)
    : filter;

  offset = offset ? parseInt(offset) : PAGINATION.OFFSET;
  limit = limit ? parseInt(limit) : PAGINATION.LIMIT;

  order = order || PAGINATION.DESC;
  sort = sort || 'createdAt';

  const final = {
    filter,
    offset,
    limit,
    order,
    sort
  };
  final.search = search;

  return final;
};

module.exports = parseQueryParams;
