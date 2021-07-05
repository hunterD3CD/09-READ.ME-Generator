// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License:
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)

  ### Table of Contents:
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Credits](#credits)
    5. [License](#license-1)
    6. [Contributing](#contributing)
    7. [Tests](#tests)
    
  ## Description: <a name="description"></a>
  ${data.description}

  ## Installation: <a name="installation"></a>
  ${data.installation}

  ## Usage: <a name="usage"></a>
  ${data.usage}

  ## Credits: <a name="credits"></a>
  ${data.credits}

  ## License: <a name="license-1"></a>
  ${data.license}

  ## Contributing: <a name="contributing"></a>
  ${data.contributing}

  ## Tests: <a name="tests"></a>
  ${data.tests}
`;
}

module.exports = generateMarkdown;
