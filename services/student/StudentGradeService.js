const { StudentGrade } = require('../../data/models');


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
}

module.exports = StudentGradeService;
