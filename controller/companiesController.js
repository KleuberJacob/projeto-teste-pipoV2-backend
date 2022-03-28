const express = require("express");
const router = express.Router();
const Companies = require("../models/companiesModel");
const Employees = require("../models/employeesModel");

const connection = require("../database/database");

router.get("/companies", (req, res) => {
    Companies.findAll().then((companies) => {
        res.status(200).send(companies)
    });
});

router.get("/company/:id/employees", (req, res) => {
    const { id } = req.params

    Companies.findByPk(id, {
        include: {
            association: "employees"
        }       
    }).then((company_employees) => {
        res.status(200).send(company_employees.employees)
    }).catch((err) => {
        res.status(400).send(err)
    })
});

router.get("/company/:id/plains", (req, res) => {
    const { id } = req.params

    let sql = `SELECT distinct p.id, p.name 
               FROM plains AS p 
               JOIN companies_x_plains AS cp ON cp.id_plain = p.id 
               WHERE cp.id_company = "${id}"`

    connection.query(sql).then((response) => {
        res.send(response)
        return
    }).catch((err) => {
        console.log(err)
    });      
});

router.post("/new/employee", (req, res) => {

    const {name, cpf, email, address, admission_date, weight, height, meditated_hours, company} = req.body

    Employees.create({
        name: name,
        cpf: cpf,
        email: email,
        address: address,
        admission_date: admission_date,
        weight: weight,
        height: height,
        meditated_hours: meditated_hours, 
        company_id: company
    }).then(() => {
        res.sendStatus(201)
    }).catch((err) => {
        res.status(400).send(err)
    })   
});

router.delete("/employee/:id", (req, res) => {
    const { id } = req.params

    Employees.destroy({
        where: { id: id }        
    }).then(() => {
        res.sendStatus(200)
    }).catch((err) => {
        res.status(400).send(err)
    })
});

module.exports = router;