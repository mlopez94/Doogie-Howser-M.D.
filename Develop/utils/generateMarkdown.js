

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.project} [![Alt text]${data.license}]

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
  [![Alt text]${data.license}]

  ## Testing
  ${data.test}

  ## Questions
  :octocat: [Github Profile](https://github.com/${data.github}) <br />
  For any questions, please contact me [Email](mailto:${data.email})


`;
}

module.exports = generateMarkdown;
