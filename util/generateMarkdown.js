// Function to generate markdown for README

function generateMarkdown(data) {
    return `
# ${data.Title}
https://github.com/carvasquez206/ReadMEGenarataaah
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.Installation}
# Usage
In order to use this app, ${data.Usage}
# License
This project is licensed under the ${data.License} license. 
![GitHub license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
# Contributing
​Contributors: ${data.Contributing}
# Tests
The following is needed to run the test: ${data.Tests}
# Questions
If you have any questions about the repo, open an issue or contact ${data.Username} directly at : ${data.Email}.
`
}

module.exports = generateMarkdown;

//link in line 6 won't work if I misspell the project name. I'm think of making it static. 
//# ${data.Title}
//https://github.com/${data.Username}/${data.Title}