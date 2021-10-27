// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
// Instead of using a html file, used a js one
const generatorMarkdown = require('./util/generateMarkdown');


// Create an array of questions for user input
const questions = [{
        type: "input",
        message: "What is the title of the project?",
        name: "Title"
    }, {
        type: "input",
        message: "Describe what the project is about.",
        name: "Description"
    }, {
        type: "input",
        message: "Table of Contents.",
        name: "Table of Contents"
    }, {
        type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "Installation"
    }, {
        type: "input",
        message: "How is the app used? Give some instructions",
        name: "Usage"
    }, {
        type: "input",
        message: "What liscence is being used? (e.g. Apache, MIT, etc.)",
        name: "License"
    }, {
        type: "input",
        message: "Who contributed to this project?:",
        name: "Contributing"
    }, {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "Tests"
    }, {
        type: "input",
        message: "Contact info for inquiries.",
        name: "Questions"
    }, {
        type: 'input',
        message: 'What is your Github username?',
        name: 'Username'
    }, {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email'
    },
]

// Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}


// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)

        })
}

// Function call to initialize app
init();