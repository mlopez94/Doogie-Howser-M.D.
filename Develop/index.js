// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('../Develop/utils/generateMarkdown.js');
const fs = require('fs');

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
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license you would like to apply to this README:',
        choices: ['The Unlicense','MIT License','Mozilla Public License','Apache License 2.0']
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

// const generatePage = () => 'Name: Jane, Github: janehub';

// fs.writeFile('readME.md', generatePage(name, github), err => {
//   if (err) throw err;

//   console.log('ReadME complete! Check out README to see the output!');
// });


// TODO: Create a function to write README file
const writeMarkdown = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./readme.md', fileContent, err => {
      if (err) {
        reject(err);
        return
      }
      resolve ({
        ok: true,
        message: 'File created'

      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
questions()
.then((responses)=>{
  console.log(responses);
  writeMarkdown(generateMarkdown(responses))
})
.catch (err => {
  console.log(err);
});