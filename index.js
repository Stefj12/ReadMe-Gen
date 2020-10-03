const inquirer = require("inquirer")
const generateMarkdown = require("./generateMarkdown")
const fs = require("fs")
// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "projectTitle"
      },
      {
        type: "input",
        message: "Please enter your description?",
        name: "projectDescript"
      },
      {
        type: "input",
        message: "What is your Github username?",
        name: "username"
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What license would you like for your project?",
        name: "license",
        Choice: ["MIT","Apache","GPLv3"]
      },
      {
        type: "input",
        message: "Please enter any installation instructions?",
        name: "installation"
      },
      {
        type: "input",
        message: "Please enter any usage instructions?",
        name: "usage"
      },
      {
        type: "input",
        message: "Please enter any contribution instructions?",
        name: "contribution"
      },
      {
        type: "input",
        message: "Please enter any test instructions?",
        name: "test"
      },
      
      


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, function(err){
        if (err){
            console.log(err);
        }
        else{
            console.log("readme generate successful");
        }

    });
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then(function(answers){
    console.log(answers);
    writeToFile("README.md", generateMarkdown(answers))

})}

// function call to initialize program
init();
