const {
  RESOURCE_NOT_FOUND,
} = require('../../utils/errorDetails');
const {
  ResourceNotFoundError,
} = require('../../modules/exceptions');
const StudentService = require('../../services/student/StudentService');


/**
 * Class StudentController
 */
class StudentController {
  /**
   *
   * @param data
   * @returns {Promise<data>}
   */
  static async create({ data }) {
    const result = await StudentService.create({ data });

    return result;
  }

  /**
   *
   * @param id
   * @param data
   * @returns {Promise<*>}
   */
  static async update({ id, data }) {
    const student = await StudentService.getById({ id });
    if (!student) throw new ResourceNotFoundError(RESOURCE_NOT_FOUND);

    const result = await StudentService.update({ data, student });

    return result;
  }

  /**
   *
   * @param id
   * @param user
   * @returns {Promise<void>}
   */
  static async delete({ id, user }) {
    const student = await StudentService.getById({ id })
    if (!student) throw new ResourceNotFoundError(RESOURCE_NOT_FOUND);

    const result = await StudentService.delete({ id });

    return result;
  }

  /**
   *
   * @param queryParams
   * @returns {Promise<*>}
   */
  static async get({ queryParams }) {
    return StudentService.get({ queryParams });
  }

  /**
   *
   * @param id
   * @returns {Promise<*>}
   */
  static async getById({ id }) {
    return StudentService.getById({ id });
  }
}

module.exports = StudentController;
