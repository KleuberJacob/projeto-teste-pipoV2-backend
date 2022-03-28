const Sequelize = require("sequelize");
const connection = require("../database/database");

const Companies_x_Plains = require("./companies_x_plains");

const Plain = connection.define("plain", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    plain_type: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});    

Companies_x_Plains.belongsTo(Plain, {foreignKey: "id", as: "datas"})
Plain.belongsTo(Companies_x_Plains, {foreignKey: "id", as: "data"})

Plain.sync({force: false})
    .then(() => { 
        console.log("Table plain created")
    })

module.exports = Plain;