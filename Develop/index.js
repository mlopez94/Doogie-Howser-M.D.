// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "project",
      message: "What is the name of your project? (Required)",
      validate: (projectInput) => {
        if (projectInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project (Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please enter a description of your project!");
            return false;
          }
        },
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation intructions (Required)",
        validate: (installationInput) => {
          if (installationInput) {
            return true;
          } else {
            console.log("Please enter installation intructions!");
            return false;
          }
        },
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information (Required)",
        validate: (usageInput) => {
          if (usageInput) {
            return true;
          } else {
            console.log("Please enter usage information!");
            return false;
          }
        },
        
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter the contribution guidelines for other developers (Required)",
        validate: (contributionInput) => {
          if (contributionInput) {
            return true;
          } else {
            console.log("Please enter the contribution guidelines!");
            return false;
          }
        },
        
    },
    {
        type: "input",
        name: "test",
        message: "Test instructions (Required)",
        validate: (testInput) => {
          if (testInput) {
            return true;
          } else {
            console.log("Please enter test instructions!");
            return false;
          }
        },
    }
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
questions();
