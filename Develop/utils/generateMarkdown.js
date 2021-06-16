

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.project}

  ## Description
  ${data.description}
  
  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  * [Testing](#test)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## License
  ${data.license}

  ## Testing
  ${data.test}

  ## Questions
  [Github Profile:] (https://github.com/${data.github})
  For any questions, please contact me [EMAIL](mailto:${data.email})


`;
}

module.exports = generateMarkdown;
