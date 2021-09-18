const Router = require('koa-router');
const {
  RESOURCE_NOT_FOUND
} = require('../../utils/errorDetails');
const {
  createStudentSchema, updateStudentSchema
} = require('../../modules/validator/validationSchemas');
const validator = require('../../modules/validator/index');
const parseQueryParams = require('../../utils/queryParams');
const { ResourceNotFoundError } = require('../../modules/exceptions');
const StudentController = require('../../controllers/student/StudentController');


const router = new Router({
  prefix: '/student'
});


const StudentGradeRoute = require('./StudentGradeRoute');

router.post('/', async (ctx) => {
  await validator.customValidation(ctx.request.body, createStudentSchema);

  const result = await StudentController.create({
    data: { ...ctx.request.body }
  });

  return ctx.created(result);
});

router.patch('/:id', async (ctx) => {
  await validator.customValidation(ctx.request.body, updateStudentSchema);
  const { id } = ctx.params;

  const result = await StudentController.update({
    id,
    data: { ...ctx.request.body }
  });

  return ctx.accepted(result);
});

router.delete('/:id', async (ctx) => {
  const { id } = ctx.params;

  await StudentController.delete({ id });

  return ctx.noContent();
});

router.get('/', async (ctx) => {
  const queryParams = parseQueryParams(ctx.request.query);

  const result = await StudentController.get({
    queryParams
  });

  return ctx.ok(result);
});

router.get('/:id',async (ctx) => {
  const { id } = ctx.params;

  const result = await StudentController.getById({ id });
  if (!result) throw new ResourceNotFoundError(RESOURCE_NOT_FOUND);

  return ctx.ok(result);
});

router.use(StudentGradeRoute.routes());


module.exports = router;
