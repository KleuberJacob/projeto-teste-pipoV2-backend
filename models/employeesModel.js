const Sequelize = require("sequelize");
const connection = require("../database/database");

const Company = require("./companiesModel");

const Employee = connection.define("employees", {
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
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    admission_date: {
        type: Sequelize.STRING,
        allowNull: true
    },
    weight: {
        type: Sequelize.STRING,
        allowNull: true
    },
    height: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    meditated_hours: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    company_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }    
});
 
Employee.belongsTo(Company, {foreignKey: "company_id", as: "company"})
Company.hasMany(Employee, {foreignKey: "company_id", as: "employees"})

Employee.sync({force: false})
    .then(() => { 
        console.log("Table employees created")
    })

module.exports = Employee;