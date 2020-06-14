const Sequelize = require('sequelize');
const db = require('../keys/keys');

const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'mysql',
    port: db.port,
    password: db.password
});

module.exports = sequelize;

