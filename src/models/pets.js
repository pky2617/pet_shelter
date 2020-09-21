let dotenv = require('dotenv');
let { connectionString } = require('../config');
let { Sequelize } = require('sequelize');
dotenv.config();

const sequelize = new Sequelize(connectionString);
sequelize
.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});

const Pet = sequelize.define('pets', {
    // attributes
    name: { type: Sequelize.STRING, allowNull: false, unique: 'compositeIndex'},
    type: { type: Sequelize.STRING, allowNull: false},
    breed: { type: Sequelize.STRING, allowNull: false, unique: 'compositeIndex'},
    location: { type: Sequelize.STRING, allowNull: true},
    latitude: { type: Sequelize.FLOAT, allowNull: true},
    longitude: { type: Sequelize.FLOAT, allowNull: true}
}
    );

    Pet.sync({ force: false }) ;

    exports.Pet= Pet;