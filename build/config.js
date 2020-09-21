"use strict";

var dotenv = require('dotenv');

dotenv.config();
exports.testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
exports.connectionString = process.env.CONNECTION_STRING;