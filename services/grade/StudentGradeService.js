const { PAGINATION } = require("../../utils/constants");
const { STUDENT_GRADE } = require("../../data/lcp/resources");
const { StudentGrade, sequelize } = require('../../data/models');
const { arrangeSequelizeQueryData } = require("../../utils/helpers");


/**
 * Abstract Class StudentGradeService
 */
class StudentGradeService {
  /**
   *
   * @param data
   * @returns {Promise<data>}
   */
  static async create({ data }) {
    return StudentGrade.create(data);
  }

  /**
   *
   * @param offset
   * @param limit
   * @param order
   * @param sort
   * @returns {Promise<{total: number, data: *}>}
   */
  static async getStudentsByAvgGrades({
    queryParams: {
      offset = PAGINATION.OFFSET,
      limit = PAGINATION.LIMIT,
      order
    }
  }) {
    let result = await sequelize.query(`
      SELECT ${STUDENT_GRADE.ALIAS.PLURAL}."studentId", s."fullName",
      round(AVG(${STUDENT_GRADE.ALIAS.PLURAL}.grade), 2) "avgGrade",
      Count(*) Over() AS total
      FROM "${STUDENT_GRADE.MODEL}" ${STUDENT_GRADE.ALIAS.PLURAL}
      INNER JOIN "Student" s ON ${STUDENT_GRADE.ALIAS.PLURAL}."studentId" = s.id
      GROUP BY ${STUDENT_GRADE.ALIAS.PLURAL}."studentId", s."fullName"
      ORDER BY "avgGrade" ${order}
      LIMIT ${limit} OFFSET ${offset}
    `);
    result = arrangeSequelizeQueryData({ queryData: result });

    return result;
  }
}

module.exports = StudentGradeService;
