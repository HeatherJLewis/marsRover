const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;

const loggerConfig = {
	format: combine(timestamp(), prettyPrint()),
	transports: [new transports.File({ filename: 'logs/combined.log' })],
};

const logger = createLogger(loggerConfig);

module.exports = logger;
