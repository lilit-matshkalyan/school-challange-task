const { PAGINATION } = require("../../utils/constants");
const { STUDENT_GRADE, STUDENT, SUBJECT, CLAZZ} = require("../../data/lcp/resources");
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
      SELECT ${STUDENT_GRADE.ALIAS.PLURAL}."studentId", ${STUDENT.ALIAS.PLURAL}."fullName",
      round(AVG(${STUDENT_GRADE.ALIAS.PLURAL}.grade), 2) "avgGrade", Count(*) Over() AS total
      FROM "${STUDENT_GRADE.MODEL}" ${STUDENT_GRADE.ALIAS.PLURAL}
      INNER JOIN "${STUDENT.MODEL}" ${STUDENT.ALIAS.PLURAL}
      ON ${STUDENT_GRADE.ALIAS.PLURAL}."studentId" = ${STUDENT.ALIAS.PLURAL}.id
      GROUP BY ${STUDENT_GRADE.ALIAS.PLURAL}."studentId", ${STUDENT.ALIAS.PLURAL}."fullName"
      ORDER BY "avgGrade" ${order}
      LIMIT ${limit} OFFSET ${offset}
    `);
    result = arrangeSequelizeQueryData({ queryData: result });

    return result;
  }

  /**
   *
   * @param offset
   * @param limit
   * @param order
   * @returns {Promise<{total: number, data: *}>}
   */
  static async getSubjectsByStudAvgGrades({
    queryParams: {
      offset = PAGINATION.OFFSET,
      limit = PAGINATION.LIMIT,
      order
    }
  }) {
    let result = await sequelize.query(`
      SELECT ${STUDENT_GRADE.ALIAS.PLURAL}."subjectId", ${SUBJECT.ALIAS.PLURAL}."name",
      round(AVG(${STUDENT_GRADE.ALIAS.PLURAL}.grade), 2) "avgGrade", Count(*) Over() AS total
      FROM "${STUDENT_GRADE.MODEL}" ${STUDENT_GRADE.ALIAS.PLURAL}
      INNER JOIN "${SUBJECT.MODEL}" ${SUBJECT.ALIAS.PLURAL}
      ON ${STUDENT_GRADE.ALIAS.PLURAL}."subjectId" = ${SUBJECT.ALIAS.PLURAL}.id
      GROUP BY ${STUDENT_GRADE.ALIAS.PLURAL}."subjectId", ${SUBJECT.ALIAS.PLURAL}."name"
      ORDER BY "avgGrade" ${order}
      LIMIT ${limit} OFFSET ${offset}
    `);
    result = arrangeSequelizeQueryData({ queryData: result });

    return result;
  }

  /**
   *
   * @param offset
   * @param limit
   * @param order
   * @returns {Promise<{total: number, data: *}>}
   */
  static async getClazzByStudAvgGrades({
    queryParams: {
      offset = PAGINATION.OFFSET,
      limit = PAGINATION.LIMIT,
      order
    }
  }) {
    let result = await sequelize.query(`
      SELECT ${STUDENT.ALIAS.PLURAL}."clazzId", ${CLAZZ.ALIAS.PLURAL}."name",
      round(AVG(${STUDENT_GRADE.ALIAS.PLURAL}.grade), 2) "avgGrade", Count(*) Over() AS total
      FROM "${STUDENT_GRADE.MODEL}" ${STUDENT_GRADE.ALIAS.PLURAL}
      INNER JOIN "${STUDENT.MODEL}" ${STUDENT.ALIAS.PLURAL}
      ON ${STUDENT_GRADE.ALIAS.PLURAL}."studentId" = ${STUDENT.ALIAS.PLURAL}.id
      INNER JOIN "${CLAZZ.MODEL}" ${CLAZZ.ALIAS.PLURAL}
      ON ${CLAZZ.ALIAS.PLURAL}.id = ${STUDENT.ALIAS.PLURAL}."clazzId"
      GROUP BY ${CLAZZ.ALIAS.PLURAL}.id, ${STUDENT.ALIAS.PLURAL}."clazzId"
      ORDER BY "avgGrade" ${order}
      LIMIT ${limit} OFFSET ${offset}
    `);
    result = arrangeSequelizeQueryData({ queryData: result });

    return result;
  }
}

module.exports = StudentGradeService;
