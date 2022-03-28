const Sequelize = require("sequelize");
const connection = require("../database/database");

const PlainType = connection.define("plain_type", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});   

PlainType.sync({force: false})
    .then(() => { 
        console.log("Table plainType created")
    });

module.exports = PlainType;