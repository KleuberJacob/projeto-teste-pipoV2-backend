const Sequelize = require("sequelize");
const connection = require("../database/database");

const Company = connection.define("companies", {
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
    cnpj: {
        type: Sequelize.STRING,
        allowNull: false
    }
});    

Company.sync({force: false})
    .then(() => { 
        console.log("Table companies created")
    })

module.exports = Company;