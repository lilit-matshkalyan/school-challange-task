const Router = require('koa-router');
const {
  createStudentGradeSchema
} = require('../../modules/validator/validationSchemas');
const validator = require('../../modules/validator');
const parseQueryParams = require("../../utils/queryParams");
const StudentGradeController = require('../../controllers/grade/StudentGradeController');


const router = new Router({
  prefix: '/grade'
});


router.post('/', async (ctx) => {
  await validator.customValidation(ctx.request.body, createStudentGradeSchema);

  const result = await StudentGradeController.create({
    data: { ...ctx.request.body }
  });

  return ctx.created(result);
});

router.get('/student', async (ctx) => {
  const queryParams = parseQueryParams(ctx.request.query);

  const result = await StudentGradeController.getStudentsByAvgGrades({
    queryParams
  });

  return ctx.created(result);
});

router.get('/subject', async (ctx) => {
  const queryParams = parseQueryParams(ctx.request.query);

  const result = await StudentGradeController.getSubjectsByStudAvgGrades({
    queryParams
  });

  return ctx.created(result);
});

router.get('/clazz', async (ctx) => {
  const queryParams = parseQueryParams(ctx.request.query);

  const result = await StudentGradeController.getClazzByStudAvgGrades({
    queryParams
  });

  return ctx.created(result);
});


module.exports = router;
