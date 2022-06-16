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

// creating the beginning prompt and function to add new employees to the team
function addToTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "addEmployee",
            message: "Add employee(s) by role and select 'Complete'.",
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
// creating the prompt that requests new manager information
const managerData = () => {
    inquirer.prompt([
       {
        type: "input",
        name: "managerName",
        message: "What is the name of your manager?"
       },
       {
        type: "input",
        name: "managerId",
        message: "What is the ID of your manager?"
       },
       {
        type: "input",
        name: "managerEmail",
        message: "What is your managers E-mail address?"
       },
       {
        type: "input",
        name: "officeNumber",
        message: "What is the office number of your manager?"
       }
    ]).then(function(data) {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice)
        teamArray.push(manager);
        addToTeam();
    });
}
// creating the prompt that requests new engineer information
const engineerData = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of your engineer?"
           },
           {
            type: "input",
            name: "engineerId",
            message: "What is the ID of your engineer?"
           },
           {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineers E-mail address?"
           },
           {
            type: "input",
            name: "engineerGithub",
            message: "What is the Github username of your engineer?"
           } 
    ]).then(function(data) {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
        teamArray.push(engineer);
        addToTeam();
    });
}
// creating the prompt that requests new intern information
const internData = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of your intern?"
           },
           {
            type: "input",
            name: "internId",
            message: "What is the ID of your intern?"
           },
           {
            type: "input",
            name: "internEmail",
            message: "What is your interns E-mail address?"
           },
           {
            type: "input",
            name: "internGithub",
            message: "What is the Github username of your intern?"
           } 
    ]).then(function(data) {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internGithub)
        teamArray.push(intern);
        addToTeam();
    });
}
// creating the function to generate the HTML page file using file system
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your Dream Team Layout has been successfully created! Look at the index.html!")
        }
    })
};