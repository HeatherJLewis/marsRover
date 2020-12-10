const { Sequelize } = require('sequelize');
const {
	sequelizeDatabaseConnection,
} = require('../config/sequelizeDbConnection');

const database = sequelizeDatabaseConnection;

const Users = database.define('users', {
	username: {
		type: Sequelize.STRING,
	},
	password: {
		type: Sequelize.STRING,
	},
	emailAddress: {
		type: Sequelize.STRING,
	},
	userId: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
});

const JwtIds = database.define('jwtIds', {
	jti: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	exp: {
		type: Sequelize.BIGINT,
	},
	userId: {
		type: Sequelize.STRING,
	},
});

module.exports = {
	Users,
	JwtIds,
};
