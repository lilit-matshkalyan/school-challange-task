const Router = require('koa-router');
const {
  createStudentGradeSchema
} = require('../../modules/validator/validationSchemas');
const validator = require('../../modules/validator/index');
const StudentGradeController = require('../../controllers/student/StudentGradeController');


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


module.exports = router;
