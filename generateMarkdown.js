// function to generate markdown for README

function generateMarkdown(data) {
    return `# ${data.projectTitle}
    ## Description
    This is how you will generate a README for your repo based on a few prompts
    ## Table of Contents
    ${data.projectDescript}
    * [Installation](#Installation)
    ${data.installation}
    * [Usage](#Usage)
    ${data.usage} 
    * [Contribution](#Contribution)
    ${data.contribution}
    * [Test](#Test)
    ${data.test}
    * [Questions](#Questions)
    ${data.questions}
   ## Installation
   To install, run the command:
   npm install
   ##License
   [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

   The application is provided by MIT license.
   
   ## Tests
   npm run test

   ## Questions
   Locate all my reops at Stefj12
   stefanjohnson650@gmail.com for any questions
  `;
  }
  
  module.exports = generateMarkdown;
  