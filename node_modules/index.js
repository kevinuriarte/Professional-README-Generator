//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown.js");

//This array of questions to direct user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the title of the project.",
        validate: async (input) => {
            if (input) {
                return true;
            } else {
                console.log("Title of the project required. Enter the title now.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of the project.",
        validate: async (input) => {
            if (input) {
                return true;
            } else {
                console.log("The project description is required. Enter the description now");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter the usage instructions.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contributions as needed.",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter testing that was done.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Specify any license used.",
        choices: ["Apache", "MIT", "ISC", "GNU", "Mozilla", "Boost", "None"],
        validate: async (checkbox) => {
            if (checkbox.length == 1) {
                return true;
            } else {
                console.log("An option must be selected.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "Enter GitHub profile link here.",
        validate: async (input) => {
            if (input) {
                return true;
            } else {
                console.log("GitHub profile link is required.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address here.",
        validate: async (input) => {
            if (input) {
                return true;
            } else {
                console.log("Email address is required.");
                return false;
            }
        }
    }
];

//This function helps to write a README file
function writeToFile(data) {
    fs.writeFile("./generated/README.md", generate(data), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Success! File has been written.");
        }
    
})}

//This function is to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile(data)
    })
}

// Function call to initialize app
init();