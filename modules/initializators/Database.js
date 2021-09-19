/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
const { sequelize } = require('../../data/models');

class Database {
  async init() {
    await sequelize.authenticate();
    console.info('Connected to database ✅');
    // TODO uncomment to migrate tables
    // return await sequelize.sync();
  }
}

module.exports = Database;
