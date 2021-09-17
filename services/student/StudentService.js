const { Student } = require('../../data/models');
const { PAGINATION, ORDER } = require('../../utils/constants');
const { arrangeSequelizeInterfaceData } = require('../../utils/helpers');


/**
 * Abstract Class StudentService
 */
class StudentService {
  /**
   *
   * @param data
   * @returns {Promise<data>}
   */
  static async create({ data }) {
    return Student.create(data);
  }

  /**
   *
   * @param data
   * @param student
   * @returns {Promise<*>}
   */
  static async update({ data, student }) {
    return student.update(data);
  }

  /**
   *
   * @param id
   * @returns {Promise<void>}
   */
  static async delete({ id }) {
    await Student.destroy({ where: { id } });
  }

  /**
   *
   * @param offset
   * @param limit
   * @param order
   * @param sort
   * @returns {Promise<{total: *, data: *}>}
   */
  static async get({
    queryParams: {
      offset = PAGINATION.OFFSET,
      limit = PAGINATION.LIMIT,
      order,
      sort
    }
  }) {
    const sortOrder = [];
    if (order && sort) {
      sortOrder.push([sort, order]);
    }

    let result = await Student.findAndCountAll({
      limit,
      offset,
      order: sortOrder.length ? sortOrder : [['createdAt', ORDER.DESC]]
    });
    result = arrangeSequelizeInterfaceData({ data: result });

    return result;
  }

  /**
   *
   * @param id
   * @returns {Promise<*>}
   */
  static async getById({ id }) {
    return Student.findByPk(id);
  }
}

module.exports = StudentService;
