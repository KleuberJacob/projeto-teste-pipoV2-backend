require("dotenv").config()
const express = require("express");
const app = express();
const connection = require("./database/database");
const cors = require("cors");

const connectionPort = process.env.LOCALHOST_PORT;

const companiesController = require("./controller/companiesController");

const modelCompanies = require("./models/companiesModel");
const modelEmployees = require("./models/employeesModel");
const modelPlainsType = require("./models/plainTypeModel");
const modelPlains = require("./models/plainsModel");
const modelCompany_x_plains = require("./models/companies_x_plains");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

connection
    .authenticate()
    .then(() => {
        console.log("Successful Connection Database")
    })
    .catch((err) => {
        console.log(err)
    });

app.use("/", companiesController)

app.listen(connectionPort, () => {
    console.log("Server Running")
});