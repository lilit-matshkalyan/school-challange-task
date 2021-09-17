const { PAGINATION: { LIMIT, OFFSET } } = require('../../utils/constants');


const modifier = (ctx) => {
  if ((ctx.status >= 204 && ctx.status < 400) || ctx.status === 405 || !ctx.body) return;
  let result = ctx.body;
  if (result && result.dataValues) {
    result = result.dataValues;
  }
  const response = {};
  let pagination = null;
  if (Array.isArray(result.data) && result.total) {
    pagination = {
      limit: parseInt(ctx.request.query.limit, 10) || LIMIT,
      offset: parseInt(ctx.request.query.offset, 10) || OFFSET,
      total: result.total
    };
  }
  if (result.status && typeof result.status === 'number') {
    ctx.status = result.status;
    delete result.status;
  }
  if (!result.data && !result.meta) result.data = { ...result };
  if (!result.meta && result.data) result.meta = {};

  response.meta = {
    pagination,
    ...result.meta
  }

  response.data = result.data;
  ctx.body = response;
};


module.exports = (ctx) => {
  modifier(ctx);
};
