const {
  PERMISSION_DENIED,
} = require('../utils/errorDetails');
const { authConfig } = require('../config');
const { AccessDeniedError } = require('../modules/exceptions/index');


module.exports = async (ctx, next) => {
  if (ctx.request.headers.apikey !== authConfig.apiAuthSecretKey) {
    throw new AccessDeniedError(PERMISSION_DENIED);
  }
  await next();
};
