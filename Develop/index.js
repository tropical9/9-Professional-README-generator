// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');

// console.log ("README Generator");

// const generateREADME = ({title, description, tableOfContents, installation, usage, license, contributing, tests, questions}) =>

// TODO: Create an array of questions for user input
inquirer
.prompt ([

    {
        type: "input",
        message: "What is the title?",
        name: "##TITLE"
    },

    {
        type: "input",
        message: "Enter description",
        name: "##DESCRIPTION"
    },
    {
        type: "input",
        message: "Table of Contents",
        name: "##TABLE OF CONTENTS"   
    },
    {
        type: "input",
        message: "Enter installation instructions",
        name: "##INSTALLATION"  
    },
    {
        type: "input",
        message: "Enter Usage",
        name: "##USAGE"  
    },
    {
        type: "checkbox",
        message: "Select license",
        name: "##LICENSE"  
    },
    {
        type: "input",
        message: "Enter Contributing",
        name: "##CONTRIBUTING"  
    },
    {
        type: "input",
        message: "Enter tests",
        name: "##TESTS"  
    }, 
    {
        type: "input",
        message: "Enter Questions:",
        name: "##QUESTIONS"  
    }

])

// const questions = [
    
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the 
// TITLE-- of my project and 
//sections 
//DESCRIPTION, // 
//TABLE OF CONTENTS, //links will take me to the corresponding section of the readme
//Installation,
//Usage,
//License,  //needs a badge, list of options , and notice is added that explains which license the application is covered under
//Contributing,
//Tests, 
//Questions //will contain the github username with a link to my github profile, will contain email address with instructions of how to reach me with additional questions


