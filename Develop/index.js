// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateReadme = require("./utils/generateMarkdown");

// const generateReadme = require ("./utils/generateMarkdown")
// const writeFileAsync = util.promisify(fs.writeFile);


// console.log ("README Generator");

// const generateREADME = ({title, description, tableOfContents, installation, usage, license, contributing, tests, questions}) =>

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: "input",
        message: "What is the title of the project?",
        name: "TITLE",
    },

    {
        type: "input",
        message: "Write a description of your project",
        name: "##DESCRIPTION",
    },
    {
        type: "input",
        message: "Table of Contents",
        name: "##TABLE OF CONTENTS",   
    },
    {
        type: "input",
        message: "Enter installation instructions",
        name: "##INSTALLATION", 
    },
    {
        type: "input",
        message: "Enter Usage",
        name: "##USAGE",  
    },
    {
        type: "list",
        message: "Select license",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ],
        name: "##LICENSE",  
    },
    {
        type: "input",
        message: "Enter Contributing",
        name: "##CONTRIBUTING",  
    },
    {
        type: "input",
        message: "Enter tests",
        name: "##TESTS",  
    }, 
    {
        type: "input",
        message: "Enter Questions:",
        name: "##QUESTIONS",  
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: ",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: ",
    },
])



.then((data) => {
    const filename = `${data.TITLE.toLowerCase().split(' ').join('')}.md`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });