// ----------------------------- Create a function to generate markdown for README -----------------
function generateMarkdown(data) {
  return `# ${data.title}

  ## License badge:
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
  ## License note:
  ${data.license}

  ## Demo:
  [Demo video link](https://drive.google.com/file/d/1MtoK5FBLl3-TtHBgO6tgibzepQIthB59/view)
  [Here's a walkthrough video that demonstrates its functionality.](./demo.gif)

  ## Table of Contents:
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Question](#question)
    
  ## Description:
  ${data.description}

  ## Installation: 
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Credits: 
  ${data.credits}

  ## Contributing:
  [Contributor Covenant](https://www.contributor-covenant.org/)

  ## Tests:
  ${data.tests}

  ## Question: 
  * Github: [${data.github}](https://github.com/${data.github})
  * Email: ${data.email} 
`;
}

module.exports = generateMarkdown;
