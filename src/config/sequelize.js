const { mariadb, docker } = require('./config');

module.exports = {
  development: {
    username: mariadb.development.user,
    password: mariadb.development.pass,
    database: mariadb.development.name,
    port: docker ? mariadb.development.portDocker : mariadb.development.port,
    host: docker ? mariadb.development.hostDocker : mariadb.development.host,
    dialect: mariadb.development.dialect,
    logging: JSON.parse(mariadb.development.logging) || false,
  },
  production: {
    username: mariadb.production.user,
    password: mariadb.production.pass,
    database: mariadb.production.name,
    port: docker ? mariadb.production.portDocker : mariadb.production.port,
    host: docker ? mariadb.production.hostDocker : mariadb.production.host,
    dialect: mariadb.production.dialect,
    logging: JSON.parse(mariadb.production.logging) || false,
  },
};
