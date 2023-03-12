const { mariadb } = require('./config');

module.exports = {
  development: {
    username: mariadb.development.user,
    password: mariadb.development.pass,
    database: mariadb.development.name,
    port: mariadb.development.port,
    host: mariadb.development.host,
    dialect: mariadb.development.dialect,
    logging: JSON.parse(mariadb.development.logging) || false,
  },
  test: {
    username: mariadb.test.user,
    password: mariadb.test.pass,
    database: mariadb.test.name,
    port: mariadb.test.port,
    host: mariadb.test.host,
    dialect: mariadb.test.dialect,
    logging: JSON.parse(mariadb.test.logging) || false,
  },
  production: {
    username: mariadb.production.user,
    password: mariadb.production.pass,
    database: mariadb.production.name,
    port: mariadb.production.port,
    host: mariadb.production.host,
    dialect: mariadb.production.dialect,
    logging: JSON.parse(mariadb.production.logging) || false,
  },
};
