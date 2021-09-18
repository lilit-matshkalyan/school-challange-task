const StudentGradeService = require('../../services/student/StudentGradeService');


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
}

module.exports = StudentGradeController;
