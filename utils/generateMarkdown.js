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
    1. [Description](https://github.com/hunterD3CD/09-READ.ME-Generator#description)
    2. [Installation](https://github.com/hunterD3CD/09-READ.ME-Generator#installation)
    3. [Usage](https://github.com/hunterD3CD/09-READ.ME-Generator#usage)
    4. [Credits](https://github.com/hunterD3CD/09-READ.ME-Generator#credits)
    5. [License](https://github.com/hunterD3CD/09-READ.ME-Generator#license-1)
    6. [Contributing](https://github.com/hunterD3CD/09-READ.ME-Generator#contributing)
    7. [Tests](https://github.com/hunterD3CD/09-READ.ME-Generator#test)
    [google link] (https://www.google.com)
    
  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Credits:
  ${data.credits}

  ## License:
  ${data.license}

  ## Contributing: 
  ${data.contributing}

  ## Test:
  ${data.test}
`;
}

module.exports = generateMarkdown;
