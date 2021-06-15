

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # ${project}

  ## Description
  ${description}
  
  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  * [Testing](#test)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contribution
  ${contribution}

  ## License
  ${license}

  ## Testing
  ${test}


`;
}

module.exports = generateMarkdown;
