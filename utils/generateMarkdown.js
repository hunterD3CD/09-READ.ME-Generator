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

  ### Table of Contents:
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Credits](#credits)
    5. [Contributing](#contributing)
    6. [Tests](#tests)
    6. [Question](#question)
    
  ## Description: <a name="description"></a>
  ${data.description}

  ## Installation: <a name="installation"></a>
  ${data.installation}

  ## Usage: <a name="usage"></a>
  ${data.usage}

  ## Credits: <a name="credits"></a>
  ${data.credits}

  ## Contributing: <a name="contributing"></a>
  [Contributor Covenant](https://www.contributor-covenant.org/)

  ## Tests: <a name="tests"></a>
  ${data.tests}

  ## Question: <a name="question"></a>
  * Github: [${data.github}](https://github.com/${data.github})
  * Email: ${data.email} 
`;
}

module.exports = generateMarkdown;
