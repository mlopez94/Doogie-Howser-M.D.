

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.project} ![badge](${data.license})

  ## Description
  ${data.description}
  
  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  * [Testing](#testing)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## License
  The license for this project is ![badge](${data.license})

  ## Testing
  ${data.test}

  ## Questions
  :octocat: [Github Profile](https://github.com/${data.github}) <br />
  For any questions, please contact me [Email](mailto:${data.email})


`;
}

module.exports = generateMarkdown;
