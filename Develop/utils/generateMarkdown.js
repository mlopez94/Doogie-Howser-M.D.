

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  # ${data.project}

  ## Description
  ${data.description}
  
  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  * [Testing](#test)

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


`;
}

module.exports = generateMarkdown;
