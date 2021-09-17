/**
 * arrange custom query response of sequelize
 * @param {String} data - query's data
 * @returns {Object} params
 */
exports.arrangeSequelizeInterfaceData = ({ data }) => ({
  data: data.rows,
  total: data.count
});
