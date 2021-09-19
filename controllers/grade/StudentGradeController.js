const StudentGradeService = require('../../services/grade/StudentGradeService');


/**
 * Class StudentGradeController
 */
class StudentGradeController {
  /**
   *
   * @param data
   * @returns {Promise<data>}
   */
  static async create({ data }) {
    // TODO check student and subject existence
    return StudentGradeService.create({ data });
  }

  /**
   *
   * @param queryParams
   * @returns {Promise<{total: *, data: *}>}
   */
  static async getStudentsByAvgGrades({ queryParams }) {
    return StudentGradeService.getStudentsByAvgGrades({ queryParams });
  }

  /**
   *
   * @param queryParams
   * @returns {Promise<{total: number, data: *}>}
   */
  static async getSubjectsByStudAvgGrades({ queryParams }) {
    return StudentGradeService.getSubjectsByStudAvgGrades({ queryParams });
  }
}

module.exports = StudentGradeController;
