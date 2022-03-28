const Sequelize = require("sequelize");
const connection = require("../database/database");

const Companies_x_plains = connection.define("companies_x_plains", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    id_company: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "companiesModel", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    },
    id_plain: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "plainsModel", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    }
});  

Companies_x_plains.sync({force: false})
    .then(() => { 
        console.log("Table companies_x_plains created")
    })

module.exports = Companies_x_plains;