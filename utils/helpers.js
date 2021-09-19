/**
 * arrange custom query response of sequelize
 * @param data
 * @returns {{total: number, data: *}}
 */
exports.arrangeSequelizeInterfaceData = ({ data }) => ({
  data: data.rows,
  total: data.count
});

/**
 * arrange custom query response of sequelize
 * @param queryData
 * @returns {{total: (number|number), data: *}}
 */
exports.arrangeSequelizeQueryData = ({ queryData }) => ({
  data: queryData[1].rows,
  total: queryData[1].rows[0] ? parseInt(queryData[1].rows[0].total, 10) : 0
});
