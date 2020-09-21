"use strict";

var dotenv = require('dotenv');

var _require = require('../config'),
    connectionString = _require.connectionString;

var _require2 = require('sequelize'),
    Sequelize = _require2.Sequelize;

dotenv.config();
var sequelize = new Sequelize(connectionString);
sequelize.authenticate().then(function () {
  console.log('Connection has been established successfully.');
})["catch"](function (err) {
  console.error('Unable to connect to the database:', err);
});
var Pet = sequelize.define('pets', {
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: 'compositeIndex'
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  breed: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: 'compositeIndex'
  },
  location: {
    type: Sequelize.STRING,
    allowNull: true
  },
  latitude: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: true
  }
});
Pet.sync({
  force: false
});
exports.Pet = Pet;