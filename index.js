// Required packages for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of user input questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Project description?",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Image path?",
  },
  {
    type: "input",
    name: "link",
    message: "Project URL?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select a license.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "Dependencies?",
  },
  {
    type: "input",
    name: "features",
    message: "Key features?",
  },
  {
    type: "input",
    name: "usage",
    message: "Used technologies?",
  },
  {
    type: "input",
    name: "creator",
    message: "Your GitHub?",
  },
  {
    type: "input",
    name: "email",
    message: "Your email?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Contributors' GitHub?",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Test instructions?",
  },
];

// Function to write to README.md File
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to start the app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Generating README.md...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}

init();
