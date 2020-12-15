const express = require('express');

const admin = express.Router();

admin.use('/dashboard', express.static('app/adminDashboard'));

module.exports = admin;
