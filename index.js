//---------------------------------STEP 1: Include packages needed for this application-------------------------------------
// fs module to write new file; inquirer module to ask user questio; generateMarkdown is customized module;
const fs = require("fs");
const inquirer = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");
const generateMarkdown = require("./utils/generateMarkdown");


//--------------------------------STEP 2: Create an array of questions for user input--------------------------------------
const questions = [
  // question 1: your project title
  {
    name: "title",
    type: "input",
    message: "what is your project title?",
  },
  // question 2: the description
  {
    name: "description",
    type: "input",
    message: "what is the project about?",
  },
  // question 3: table of contents

  // question 4: installation
  {
    name: "installation",
    type: "input",
    message: "what are the steps required to install your project?",
  },
  // question 5: usage
  {
    name: "usage",
    type: "input",
    message: "provide instructions and examples for use",
  },
  // question 6: credits
  {
    name: "credits",
    type: "input",
    message:
      "list your collaborators, third-party assets, tutorial links, etc.",
  },
  // question 7: license
  {
    name: "license",
    type: "checkbox",
    message: "please check your license below",
    choices: [
      "GNU AGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
      "none",
    ],
  },
  // question 8: badges

  // question 9: contributing

  // question 10: tests
  {
    name: "tests",
    type: "input",
    message: "How to test the project?",
  },
  // question 11: question github username
  {
    name: "github",
    type: "input",
    message: "what is your github username?",
  },
  // question 12: question email
  {
    name: "email",
    type: "input",
    message: "what is your email?",
  },
];

console.log(questions);

// -----------------------------------STEP 3: Create a function to write README file ---------------------------------
function writeNewFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw error;
    console.log("the readme file is created successfully.");
  });
}

// -----------------------------------STEP 4: Create a function to initialize app --------------------------------
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    // console.log(userInput);
    writeNewFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
