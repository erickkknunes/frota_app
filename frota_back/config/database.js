const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('frota_app', 'root', 'gkeeirmaos12', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
