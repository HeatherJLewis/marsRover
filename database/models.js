const { Sequelize } = require('sequelize');
const {
	sequelizeDatabaseConnection,
} = require('../config/sequelizeDbConnection');

const database = sequelizeDatabaseConnection;

const Users = database.define('users', {
	username: {
		type: Sequelize.STRING,
	},
	surname: {
		type: Sequelize.STRING,
	},
	firstname: {
		type: Sequelize.STRING,
	},
	password: {
		type: Sequelize.STRING,
	},
	emailAddress: {
		type: Sequelize.STRING,
	},
	userId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
	},
});

module.exports = {
	Users,
};
