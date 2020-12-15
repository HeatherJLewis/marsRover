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
	hash: {
		type: Sequelize.STRING,
	},
	userId: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	roleId: {
		type: Sequelize.INTEGER,
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

const Roles = database.define('roles', {
	roleId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
	},
	accessRole: {
		type: Sequelize.STRING,
	},
});

module.exports = {
	Users,
	JwtIds,
	Roles,
};
