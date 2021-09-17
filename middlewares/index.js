const koaBody = require('koa-body');
const compose = require('koa-compose');
const respond = require('koa-respond');

const responseHandler = require('./responseHandler');
const { HTTP_STATUS_METHODS } = require('../utils/constants');


module.exports = () => compose([
  koaBody(),
  respond({
    statusMethods: HTTP_STATUS_METHODS
  }),
  responseHandler
]);
