const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql',
    port: config.db.port,
});

sequelize.authenticate()
    .then(() => console.log('MySQL connected'))
    .catch(err => console.log('Error: ' + err));


module.exports = sequelize;
