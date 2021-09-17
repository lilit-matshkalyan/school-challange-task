/* eslint-disable func-names */
const Router = require('koa-router');
const apiAuth = require('../middlewares/apiAuth');


const router = new Router({
  prefix: '/api/v1'
});


const studentRouter = require('./student');

router.use(studentRouter.routes());


router.get('/ping', async ctx => ctx.ok('pong v1.0.0'));

module.exports = function (app) {
  app.use(apiAuth);
  app.use(router.routes());
  app.use(router.allowedMethods());
};
