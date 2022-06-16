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

const blankPage = "";

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
function renderTeam() {
    console.log(teamArray)
    teamArray.forEach(role => {
        if (role.getRole() === "manager") {
            blankPage += `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${role.name}: Manager</h5>
            <h6 class="card-text">ID: ${role.id}</h6>
            <h6 class="card-text">Email: ${role.email}</h6>
            <h6 class="card-text">Office Phone Number: ${role.phone}</h6>
        </div>
        </div>`
        } else if (role.getRole() === "intern") {
            blankPage += `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${role.name}: Engineer</h5>
            <h6 class="card-text">ID: ${role.id}</h6>
            <h6 class="card-text">Email: ${role.email}</h6>
            <h6 class="card-text">Graduated from: ${role.school}</h6>
        </div>
        </div>`
        } else if (role.getRole() === "engineer") {
            blankPage += `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${role.name}: Intern</h5>
            <h6 class="card-text">ID: ${role.id}</h6>
            <h6 class="card-text">Email: ${role.email}</h6>
            <h6 class="card-text">GitHub username: ${role.github}</h6>
        </div>
        </div>`
        }
    
    const dreamTeamHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <h1 id="title">My Dream Team!</h1>>
        ${blankPage}
        <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        </body>
    </html>`;

    fs.writeFileSync('./dist/index.html', dreamTeamHTML, function(err) {
        if (err) {
            console.log(err);
            return
        } else {
            console.log("Your Dream Team Layout has been successfully created! Check out the index.html!")
        }
        }
    )}
)};

renderTeam();