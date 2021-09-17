const envConfigs = require('dotenv');

envConfigs.config({ path: `${__dirname}/../.env` });

const dbConfig = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALECT,
};

const serverConfig = {
  host: process.env.HOST,
  port: process.env.PORT
};

const authConfig = {
  apiAuthSecretKey: process.env.API_KEY
};


const whiteList = process.env.CORS_WHITE_LIST;

module.exports = {
  serverConfig,
  authConfig,
  whiteList,
  dbConfig
};
