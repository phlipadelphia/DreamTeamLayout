// creating link to the html generated
const generateHTML = require('./src/generateHTML');
// const team profiles and node modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Manager");
const Intern = require("./lib/Intern");
// const node modules and team
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const teamArray = [];
addToTeam();

function addToTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "addEmployee",
            message: "Add an employee, or select 'Complete'.",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Complete"
            ]
        }
    ]).then(function(data){
        const employeeRole = data.addEmployee;
        if (employeeRole === "Manager") {
            managerData();
        } else if (employeeRole === "Engineer") {
            engineerData();
        } else if (employeeRole === "Intern") {
            internData(); 
        } else if (employeeRole === "Complete") {
            renderTeam();
        }
    });
}