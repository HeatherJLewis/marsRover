const { Sequelize } = require('sequelize');
const { DATABASE_PASSWORD, DB_NAME } = require('../config/apiCredentials');

const sequelizeDatabaseConnection = new Sequelize(
	DB_NAME,
	'postgres',
	DATABASE_PASSWORD,
	{
		host: 'localhost',
		dialect: 'postgres',
	}
);

module.exports = {
	sequelizeDatabaseConnection,
};
